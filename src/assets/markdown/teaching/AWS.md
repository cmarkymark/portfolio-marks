<!--- Using Amazon AWS for Teaching -->

## Using Amazon AWS for Teaching: A Tutorial for Educators

Hey everyone, I have wanted to create this for a long time but coronavirus has pushed me to a place where I have had 
to implement this at scale. Essentially, for my stats lab (which requires SPSS), several of my students are unable to run SPSS
on their personal computers at home, so I created virtual machines (Amazon AWS EC2) for each student with SPSS pre-downloaded. I set
it up so all they have to do is enter their personal license and they are off to the races. This can be done for students who
don't have a computer that runs the software needed for class, whether because their computers are old or because they have chosen
a financially responsible option (such as a chromebook). As educators, this is a tool we can use, especially in a time of crisis, like 
right now to help our students learn without burdening them.

### What is in this tutorial?

I will explain how to: 1) apply for an Amazon AWS Educator credit; 2) create a virtual machine and put the necessary software on it; 
and 3) create a copy of this virtual machine for every student that needs it. While this is straightforward, it can be really complicated
to figure out if you have never done it before. I will walk you through these steps with a series of videos that I hope can help you
provide your students the virtual classroom that they need.

### Create Account (if you don't have one)

Head to [aws.amazon.com](aws.amazon.com). In the top right, click "Sign In to the Console" and then on the next screen click "Create a new AWS Account. This is displayed in the photos below:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS1.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS2.png" alt="After" style="width:100%">
  </div>
</div>

From here you are going to fill in your info to setup your account like so:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS3.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS4.png" alt="After" style="width:100%">
  </div>
</div>

Next you will enter a credit card. Later we will choose for a free tier account, don't worry, we won't get charged. Amazon AWS provides one virtual machine (with 1 GB of RAM) for free. Since we are setting up multiple machines for our students, we will incur a fee but that is why we are going to apply for an AWS Educators credit! Additionaly, if your students are tech savvy, you could have them set this up themselves and it would likely be free, but we are in a pinch now going virtual with coronavirus, so let's press onward! So, enter your credit info:

<div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS5.png" alt="Before" style="width:100%" >
</div>

Next you will have to do a phone verification, just enter your cell number, do the rather challenging text match I'm not a robot thing, and then enter the code, like so:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS6.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS7.png" alt="After" style="width:100%">
  </div>
</div>

Finally, you will select the free plan (as showed below) and you have completed making your account!

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS8.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS9.png" alt="After" style="width:100%">
  </div>
</div>

### Applying For AWS Educator Grant

In case you already had an account and are starting here, return to [aws.amazon.com] and click "Sign in to the Console". You will enter the email address you just signed up with (make sure the "Root User" tab is selected) and then you will be prompted to enter your password:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS10.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS11.png" alt="After" style="width:100%">
  </div>
</div>

Now you are on the Management Console. We need to get our account ID so go to the top right where your username is, a drop down will appear, please click on "My Account" (as displayed in the photo below). The first line of this next page will contain your account ID copy and save it for the Educator application:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS12.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS13.png" alt="After" style="width:100%">
  </div>
</div>
