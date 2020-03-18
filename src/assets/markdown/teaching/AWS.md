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

Amazing! We have created our virtual machine!

**If you ever need to return to this dashboard**, from the initial management console, you can hit the Services dropdown at the top of the screen and find "EC2" and it will take you here!

### Setting Up Our Virtual Machine

Okay, so we have created our virtual machine, but now we need to log into it and upload the software that our students are going to need. For this example, I am going to create a VM with RStudio uploaded onto it. Why might a student need a VM with RStudio? Perhaps they have a chromebook and cannot run RStudio, but a chromebook can access a virtual machine, so voila, a 150$ computer has just become a whole lot more useful (pro tip: if you are a student with a chromebook, you can just set this up for yourself and do your whole college/uni on a chromebook -- there are some cons tho that I won't dive into here).

We need to log into our virtual machine to set it up. I will assume three potential options: 1) you are a Windows useer; 2) you are a Mac user; or 3) you are a chromebook user. 

Before we worry about that though, we need to get our password and login info. In our EC2 dashboard, our virtual machine is selected (the blue square next to it is highlight -- if it isn't click it now). You are going to click on the Actions dropdown and then click "Get Windows Password":

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS28.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS29.png" alt="After" style="width:100%">
  </div>
</div>

This is what that Key Pair file was for, hit the "Choose File" button and upload your .pem file you downloaded earlier!

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS30.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS31.png" alt="After" style="width:100%">
  </div>
</div>

Next you will hit the "Decrypt Password" button and then, there ya go, you have your password. I recommend just saving this. This will also be your students passwords (this can be modified, but not in this tutorial). You are now receiving three important pieces of information, the Public DNS (this is the address through which you can access your machine), a user name (Administrator), and the password. I recommend copy-pasting this all into a word doc:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS32.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS33.png" alt="After" style="width:100%">
  </div>
</div>

Now you need an RDP client to log into your virtual machine. Your students will also need this so please use this part of the tutorial as a resource for them as well!

#### Windows Users

Windows has a built in RDP client. Go to the command prompt, type in mstsc, hit enter, and the RDP client will pop up:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS34.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS35.png" alt="After" style="width:100%">
  </div>
</div>

#### Mac Users

You will need to download the Microsoft Remote Desktop App from the Mac App Store. It can be accessed [here](https://apps.apple.com/us/app/microsoft-remote-desktop-10/id1295203466?mt=12)

#### Chromebook Users 

You will need to download an RDP Client. I highly recommend "Chrome RDP" which can be accessed [here](https://chrome.google.com/webstore/detail/chrome-rdp/cbkkbcmdlboombapidmoeolnmdacpkch?hl=en-US).

**Next**, we are going to use our RDP Client to log into our virtual machine. (I am going to be displaying for a Windows computer) You should have copy-pasted the Public DNS, User name, and password. The first prompt will be for the Public DNS. Copy and paste that in. Then you will be prompted for a username and password. In windows it might try to use your login name for your actual PC, so just click Use a Different Account and then enter Administrator and paste in your password. Then hit ok!

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS36.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS37.png" alt="After" style="width:100%">
  </div>
</div>

Click the appropriate prompts to make your way through and it should automatically log you into your virtual machine. Give it a minute or so, as some configuration needs to occur. At this point, you should be in your virtual machine!

<div class="column" style="width:100%; padding: 5px">
    <img src="Pics/AWS38.png" alt="Before" style="width:100%" >
 </div>

**Read this whole paragraph** before doing anything. We are going to download Google Chrome immediately, Internet Explorer can be a real pain due to security restrictions, so we will start by opening Internet Explorer. It will prompt about security setting, **please** hit the "Don't Use Recommended Settings" option, then hit ok:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS39.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS40.png" alt="After" style="width:100%">
  </div>
</div>

Next, just close Internet Explorer. We need to disable Enhanced Security in order to download Chrome and RStudio. Click on start in the bottom left and then hit the Server Manager button. Once this window is open, hit the "Local Server" button on the left sidebar:

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS41.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS42.png" alt="After" style="width:100%">
  </div>
</div>

There is an option called IE Enhanced Security Configuration and there should be a blue "On" Next to that. Click that and then hit the corresponding buttons to turn it off!

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS43.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS44.png" alt="After" style="width:100%">
  </div>
</div>

Now you can re-open Internet Explorer and download Google Chrome. Go to chrome.google.com and hit the Download Chrome button. Hit Accept and Install and then hit the Run button!

<div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS45.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS46.png" alt="After" style="width:100%">
  </div>
</div>

Let this install. Now use Google Chrome to download whatever you need. It should open automatically. For this example, we are going to download RStudio. It is good to figure out exactly where to download whatever you are going to download on your personal computer and just type in that URL on the EC2, it isn't really designed for you to be surfing the internet (hence why they set it up with internet explorer's enhanced security).

For RStudio, I will first download R from cran.rstudio.com, by clicking Download R for Windows. Then I will download RStudio from rstudio.com. (I won't detail these steps as this will be dependent on your needs, for example, if you need SPSS or matlab or something else). But check it out, here is RStudio running on my virtual machine:

<div class="column" style="width:100%; padding: 5px">
    <img src="Pics/AWS47.png" alt="Before" style="width:100%" >
 </div>
 
 Once you have all your software downloaded, CONGRATS!! You have made your virtual machine and you are ready to make copies for each of your students who need one! You can go ahead and log out of your virtual machine.

I am going to show how you can create a series of machines for your students. If you feel that your students are tech savvy enough to do it themselves, this can save money (for you), but overall, it might be really time intensive for them to replicate all of these steps and (in the current coronavirus situation), we don't have a lot of time to transition to online coursework.
 
 ### Making A Virtual for Your Student
 
 So, let's say our hypothetical student, Sally, has a chromebook and they need a virtual machine. So, first we have to make a copy of your machine with all the software downloaded on it. This copy is going to be called an image (or an AMI). So, let us return to our EC2 dashboard. We are going to select our original machine, hit the actions dropdown and select "Create Image". Fill in a name and a description and then hit "Create Image":
 
 <div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS48.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS49.png" alt="After" style="width:100%">
  </div>
</div>

Then, on the left sidebar you will click AMI under the Images header. You should see your image and the status should say "Pending". We need to wait for this to finish up. This can be another good time to take a break. Once its status is updated to available, you will make sure the blue square next to it is highlighted, go into the Actions drop down and click "Launch":

 <div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS50.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS51.png" alt="After" style="width:100%">
  </div>
</div>

This will open up the EC2 Instance Launcher that we were in before! Just like before, hit Review and Launch. On the next screen hit "Launch": 

 <div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS52.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS53.png" alt="After" style="width:100%">
  </div>
</div>

The key pair prompt from before is going to pop up. You can just use your key pair from before, so just select the "I acknowledge that I have access to the selected private key..." and then hit Launch Instance. Then on the next screen hit the "View Instances" button.

 <div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS54.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS55.png" alt="After" style="width:100%">
  </div>
</div>

This will return you to your EC2 dashboard where you now have two machines. The original one (which you named so you can easily tell which one it is) and the new one. Since this machine is for Sally, go ahead and name is "Sally's Machine":

 <div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS56.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS57.png" alt="After" style="width:100%">
  </div>
</div>

**You are all set!"** The only information that Sally needs to log in is: 1) The Public DNS, 2) the username, 3) the password, and 4) information on how to use an RDP client.

To find the Public DNS for Sally, select their machine and hit Action's and then select "Connect". The Public DNS is there and so is their user name (which is just Administrator). Unlike before, we will not generate a password. The password is exactly same as for the orgiinal machine. So just share the same password as for the original. They cannot access the original because they do not have the Public DNS for the original:

 <div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS58.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS59.png" alt="After" style="width:100%">
  </div>
</div>

You will need to explain how to use an RDP Client to log into this machine and this will pretty much just depend on the OS they are running. I only have two students thus far needing this Virtual Machine option, since they use chrome books, so I am just going to do a Skype call with them and show them how to log in! This machine we just created is an exact copy of what we created before, so in this case it has Google Chrome, R, and RStudio downloaded on it!

### Make as Many Virtual Machines as You Need

You can rinse and repeat this process for every student who needs a virtual machine. We applied for the Educators Credit at the beginning, because this is not free, but this is way more cost-effective (especially with the Credit) than students purchasing new computers to run this software!

### The Instance Isn't Able to Run the Software

I am not going to go into this in this tutorial, but if the free tier EC2 virtual machine does not have enough memory or RAM to run the software you need, you can increase both of these (obviously it will cost more) through the portal.  [Here is a tutorial](https://www.cloudsqueeze.ai/how-to-change-an-aws-ec2-instance-type-a-step-by-step-guide/index.html) explaining how to do this.

### Using Your Educator Credit

From your EC2 dashboard (or wherever you are in the AWS console), click the services dropdown and find "Billing", click "Credits" on the left side bar and then put your credit Promo Code into the input box! 

<div class="column" style="width:100%; padding: 5px">
    <img src="Pics/AWS60.png" alt="Before" style="width:100%" >
 </div>

### Final Thing

If you have multiple machines running, AWS will charge you. So when the course is over or if you know that students are not using them, you can pause and/or delete the machines! To pause the machine, select it in the EC2 dashboard, hit Actions -> Instance State -> Stop. Once it is stopped you can delete it by selecting Terminate from the same menu.

 <div class="row" style="display: flex">
  <div class="column" style="width:50%; padding: 5px">
    <img src="Pics/AWS61.png" alt="Before" style="width:100%" >
  </div>
  <div class="column" style="width:50%; padding: 5px">
   <img src="Pics/AWS62.png" alt="After" style="width:100%">
  </div>
</div>
