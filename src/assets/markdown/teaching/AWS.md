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

Next, we are going to head to [awseducate.com](awseducate.com) in order to apply for the educator grant. Click the Join AWS Educate button and then choose the Educator option, like so:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS14.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS15.png" alt="After" style="width:100%">
  </div>
</div>

Please fill out the form that pops up. This is to confirm that you are indeed a teacher. See photo below for notes on filling in individual fields:

<div class="column" style="width:100%; padding: 5px">
    <img src="Pics/AWS16.png" alt="Before" style="width:100%" >
 </div>
 
 Upon completion of this step an email will be sent to your account. **You need to go and verify your email, so please go to your email and do that**
 
 You will not immediately get your Educator credit, they have to approve it (can take several days or longer), so we are now going to continue on with actually building the virtual machines for our students!
 
 ### Creating the Initial Virtual Machine
 
We are going to return the the AWS Management Console (can log in again if you need to through [aws.amazon.com](aws.amazon.com). Once there you may need to scroll down, there is a section called "Build a Solution" and you will click the "Launch a virtual machine" button:

<div class="column" style="width:100%; padding: 5px">
    <img src="Pics/AWS17.png" alt="Before" style="width:100%" >
 </div>
 
This next screen will let you choose your base image for your model. Please copy and paste "ami-0ce84304ef5b08a22" into the search bar, hit enter, and then select the Microsoft Windows Server 2019 Base model that should pop up:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS18.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS19.png" alt="After" style="width:100%">
  </div>
</div>

Next, we are going to be asked for an "Instance Type". It has pre-selected the only free option for us, so we are just going to hit the Review and Launch button. The instance type can always be changed. The instance type just determines the number of CPUs and amount of RAM you have. The more you have, the more it will cost. For now, we get one free virtual machine, so at this stage, we still have done nothing that will cost us anything. On the next screen you are just going to go to the bottom right and hit "Launch":

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS20.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS21.png" alt="After" style="width:100%">
  </div>
</div>

#### Getting a Key Pair: Very Important Step

So, once you hit launch you will be prompted to select or create a key pair. This is essentially a privacy tool that will provide you the password to log into the virtual machine. **YOU CANNOT LOSE THIS** or you will have to start over. So, in the first drop down you will select "Create a new key pair" and in the "Key pair name" section you will name your file. You will then click the "Download Key Pair" button and you must keep track of this file!! Don't lose it. Once you download the Key Pair, click the Launch Instance button!

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS22.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS23.png" alt="After" style="width:100%">
  </div>
</div>

On the next screen, click on the blue button in the bottom right corner to go to your instances and that should take you to your EC2 managemanet portal. You should have one line there with a blank name, a long Instance ID, and whole bunch of information. We actually need to wait a few moments to let it initialize so this is a great time to take a coffee break or whatever. Maybe get up and stretch, idk. Here are pics for these steps:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS24.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS25.png" alt="After" style="width:100%">
  </div>
</div>

I recommend naming this instance so that you know this is the original one. We are going to make a copy (eventually) for every student that needs it, so we will want actual names to know what is what. You can do so by click the little pencil in the name column, typing something in, and then hitting the little checkmark:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS26.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS27.png" alt="After" style="width:100%">
  </div>
</div>

