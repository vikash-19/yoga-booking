const {Users , Subscriptions , Payments} =  require('../db') ;
const moment  = require('moment') ;


const getDetails = async (req , res)=>{

    try{
        const username =  req.session.username ;
        const user = await Users.findOne({username}) ;
        
        const currMonthStartDate =  moment().date(1) ;
        const currSubscription =  await Subscriptions.findOne({
            username , 
            date:{$gte:currMonthStartDate} 
        })

        let payment = null ;

        if(currSubscription){
            const sid = currSubscription._id ;
            payment  = await Payments.findOne({sid}) ;
        }


        const details = {
            firstName : user.firstName,
            lastName : user.lastName,
            dateOfBirth : user.dateOfBirth,
            currSubscription,
            payment
        }
        res.json(details) ;


    }catch(err){
        console.log(err.message??"Internal server error in subscription!") ;
        res.status(501).send(err.message??"Internal server error in subscription!") ;
    }

}


const subscribe = async (req , res) =>{
    try{

        const username =  req.session.username , batch = req.body.batch ;
        
        const currMonthStartDate =  moment().date(1) ;
        const currSubscription =  await Subscriptions.findOne({
            username , 
            date:{$gte:currMonthStartDate} 
        })
   
        if(currSubscription){
            return res.send("Already Subscribed!")  ;
        }

        const prevMonthStartDate =  moment().date(0).date(1) ;
        const prevSubscriptions =  await Subscriptions.find({
            username , 
            date:{$lt:currMonthStartDate},

        }).sort({date : -1}).limit(1) ;


        if(prevSubscriptions.length === 0 ){
            const newSubscription = new Subscriptions({
                batch,
                date : new Date() ,
                username 
            });

            await newSubscription.save()  ;
            return res.status(200).send("Subscribed!") ;

        }
        else{
            const prevSubscription = prevSubscriptions[0] ;
            const sid =  prevSubscription._id ;


            const payment  = await Payments.findOne({sid});
            if(!payment){
                return res.status(420).send("Previous Payment Due!")
            }
            else{
                const newSubscription = new Subscriptions({
                    batch,
                    date : new Date() ,
                    username 
                });
    
                await newSubscription.save()  ;
                return res.status(200).send("Subscribed!") ;
            }

        }


    }catch(err){
        console.log(err.message??"Internal server error in subscription!") ;
        res.status(501).send(err.message??"Internal server error in subscription!") ;
    }
}


const makePayment = async (req  , res) => {
    try{
        const username  = req.session.username ;
        const currMonthStartDate =  moment().date(1) ;
        
        const currSubscription =  await Subscriptions.findOne({
            username , 
            date:{$gte:currMonthStartDate} 
        }) ;

        if(!currSubscription){
            return res.status(404).send('Please subscribe first!') ;
        }

        const payment  = await Payments.findOne({sid : currSubscription._id}) ;
        if(payment){
            return res.status(420).send("Fees Already paid!") ;
        }


        const newPayment  = new Payments({
            sid : currSubscription._id
        });

        await newPayment.save()  ;
        res.send("Payment Successfull!") ;


    }catch(err){
        console.log(err.message??"Payment failed!") ;
        res.status(501).send(err.message??"Payment failed!") ;
    }
}

module.exports  =  {getDetails , subscribe , makePayment}