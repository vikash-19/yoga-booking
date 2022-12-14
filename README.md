A web-app for Enrolliing into the yoga classes.
<h1>Public link</h1>https://yoga-classes-booking-app.onrender.com/
<h1>ER-Diagram</h1>
<img src='https://user-images.githubusercontent.com/82103607/207562597-936160c1-3202-47aa-bb87-a633261b8a8f.png' alt='ER-Diagram Image'>
<h1>Assumptions</h1>
<ol>
  <li>Only people within the age limit of 18-65 can enroll into the classes.</li>
  <li>Fees are charged by month on month basis. A person can pay his/her fees anyday in the current month.</li>
  <li>A person with previous dues can't enroll into further classes. They must contact admin.</li>
  <li>Any enrolled person can change his/her batch any time in the month.</li>
</ol>

<h1>Approach</h1>
  <ul>
    <li>After Logging in into the site. One will land on the dashboard.</li>
    <li>If person is already enrolled then His/Her enrollemnt details appears there otherwise Enroll Now button is shown.</li>
    <li>When Enroll Now button is pressed
      <ul>
        <li>Warning appears if user is below 18 or above 65 years of age or there is any previous dues not cleared.</li>
        <li>Otherwise he/she will be prompted to choose batch and to accept the terms & conditions and get enrolled. </li>
      </ul>
    </li>
  <li>In enrollment details two buttons are shown
    <ol>
      <li>Pay Now - if fees is unpaid. It will disappear as soon as fees is paid.</li>
      <li>Change Batch - It Lets user to change their current batch.</li>
  </li>
  </ul> 
  
    
