const ugs = [
  {
    title: "To be decided",
    date: "2021",
    author:
      "Shefali Rai (20174051)"+
      "<br />Sanjana Bharti (20174039)"+
      "<br />Saptarick Mishra (20174089)",
  },
  {
    title: "To be decided",
    date: "2021",
    author:
      "Harsh Chaturvedi (20174088)"+
      "<br />Ankush Malik (20174160)"+
      "<br />Kumari Simran (20174105)",
  },
  {
    title: "To be decided",
    date: "2021",
    author:
      "Shruti Barnawal (20178063)"+
      "<br />Shivam Srivastava (20178025)"+
      "<br />Swetha Nagarajan (20178064)",
  },
  {
    title: "Smart Emeotion Detector and Typing Assistant",
    date: "2020",
    author:
      "Shruti Jagwani (20168019)"+
      "<br />Khyati Garg (20168052)"+
      "<br />Rajat Kumar Gupta (20168079)"+
      "<br />Nitesh Kumar (20168051)",
  },
  {
    title: "Human Activity Recognition by Body Points Sequencing",
    date: "2020",
    author:
      "Mayank Rana (20164041)"+
      "<br />Komal Khandelwal (20164100)"+
      "<br />Manvi Kishore (20164077)"+
      "<br />Juhi Verma (20164061)",
  },
  {
    title: "Modelling Hand Gestures for Sign Language Translation",
    date: "2020",
    author:
      "Ishank Tyagi (20164153)"+
      "<br />Divyansh Soni (20164137)"+
      "<br />Kailash Chand Saini (20164125)"+
      "<br />Chandan Jyoti Morang (20164153)",
  },
  {
    title: "Assistive Agent using TFlite by CNN Quantization",
    date: "2019",
    author:
      "Ankur Mishra (20153062)"+
      "<br />Akshit Sharma (20158010)"+
      "<br />Abhishek Kumar (20158060)"+
      "<br />Sourav Kumar (20158062)"+
      "<br />Suraj Shah (20148005)",
  },
  {
    title: "Robust Detection of Duplicated Image Regions",
    date: "2019",
    author:
      "Jatin Tayal (20154140)"+
      "<br />Lavkush Chauhan (20154059)"+
      "<br />Hemant Kushwah (20154119)"+
      "<br />Brajesh Singh (20154142)"+
      "<br />Lokajit Subbaraja (20154003)",
  },
  {
    title: "Smart Agriculture Assistant",
    date: "2019",
    author:
      "Sidhant Kohli (20154143)"+
      "<br />Shivam Kumar (20154063)"+
      "<br />Yugendra Kumar Sharma (20154067)"+
      "<br />Suraj Kumar Mall (20154094)"+
      "<br />Ved Prakash (20154124)",
  },
  {
    title: "Activity Recognition in Live Video",
    date: "2018",
    author:
      "Himanshu Patel (20145081)"+
      "<br />Arjav Jain (20148066)"+
      "<br />Kaushlam (20144120)"+
      "<br />Ajay Kumar Gond (20144137)"+
      "<br />Kante Suprabhat (20144152)",
  },
  {
    title:
      "Scene Understanding via Real Time Object Detection and Visual Question Answering",
    date: "2018",
    author:
      "Utkarsh Ojha (20145095)"+
      "<br />Utsav Adhikari (20144022)"+
      "<br />Varun Yadav (20144035)"+
      "<br />Vijay Prakash Dwivedi (20144013)"+
      "<br />Raj Kumar (20144084)",
  },
  {
    title: "Smart Policing System",
    date: "2018",
    author:
      "Sumit Paroothi (20148045)"+
      "<br />Shristi Jaiswal (20146021)"+
      "<br />Srikanth Karlapati (20148101)"+
      "<br />Uttej Cheedalla (20148103)"+
      "<br />Banoth Akhil Naik (20148105)",
  },
  {
    title: "Alert system for theft control through real time surveillance",
    date: "2017",
    author:
      "Manas Srivastava(20134106)," +
      "<br/>Chandan Kumar(20134034)," +
      "<br/>Mukesh Jaiswal(20134087)," +
      "<br/>Jitendra Singh Negi(20134096)," +
      "<br/>Jay Chand Shah(20134010)",
  },
  {
    title: "Motion detection to reduce tiger poaching and attacks",
    date: "2017",
    author:
      "Radhika Agrawal(20134014)," +
      "<br/>Sonu Kumar Sharma(20134113)," +
      "<br/>Nishi Mahto(20134011)," +
      "<br/>Snehil Srivastava(20134002)," +
      "<br/>Surendra Kumar Verma(20134041)",
  },
  {
    title: "Classification of human actions based on image processing",
    date: "2017",
    author:
      "Dhruvita Patel(20138071)," +
      "<br/>Shubham Tripathi(20138070)," +
      "<br/>Pendyala Jaychandra(20138063)," +
      "<br/>Dibya Subedi(20138011)," +
      "<br/>Priyadarshi Harsh(20138072)",
  },
  {
    title: "Moving object detection in real time",
    date: "2016",
    author:
      "Supriya Singh(20120053)," +
      "<br/>Shalu Sneha(20128028)," +
      "<br/>Nauman Ansari(20120025)," +
      "<br/>Santosh Kumar Hebram(20128040)," +
      "<br/>Brijesh Kumar(20128084)",
  },
  {
    title: "Human detection and tracking with motion analysis",
    date: "2016",
    author:
      "Pushkar P Goswami(20124040)," +
      "<br/>Rajat Goyal(20124055)," +
      "<br/>Sandeep Kumar(20121059)," +
      "<br/>Rahul Singh Bhadauria(20124066)," +
      "<br/>Sai Kiran Nelluri(20124106)",
  },
  {
    title: "Malware analysis using soft computing techniques",
    date: "2015",
    author:
      "Tulika Mithal(20110068)," +
      "<br/>Kshitij Shah(20118049)," +
      "<br/>Shreyansh Dubey(20119055)," +
      "<br/>Vinod Pawar(20118060)",
  },
  {
    title: "Real world object tracking",
    date: "2015",
    author:
      "Usama Ahmed(20114066)," +
      "<br/>Vikash Sharma(20114116)," +
      "<br/>Sandeep Singh(20115028)," +
      "<br/>Ram Sundar Mahto(20114121)",
  },
  {
    title: "Human emotion detection by facial expression",
    date: "2015",
    author:
      "Pranjal Sahay(20115096)," +
      "<br/>Shubham Patel(20114028)," +
      "<br/>Yogesh Meena(20114086)," +
      "<br/>Deepankar(20114109)",
  },
  {
    title: "Gesture recognition system for human computer interaction",
    date: "2014",
    author:
      "Shashank Jain(20108022)," +
      "<br/>Sherry(20108096)," +
      "<br/>Abhinav Palash(20106022)," +
      "<br/>Alok Kumar Yadav(20108105)," +
      "<br/>Tushar Gangwar(20109020)",
  },
  {
    title: "Dynamic environment exploration tool",
    date: "2014",
    author:
      "Shiwani Jaiswal(20108013)," +
      "<br/>Vijay Kumar Jain(20103011)," +
      "<br/>Indrajeet Kumar Shah(20104143)," +
      "<br/>Pradeep Kumar Mishra(20104123)",
  },
  {
    title: "Remotely controlled home automation",
    date: "2014",
    author:
      "Saurav Chandra," +
      "<br/>Anurag Sahu," +
      "<br/>Anjali Agarwal," +
      "<br/>Sachin Kushwaha," +
      "<br/>Ved Prakash",
  },
];

export default ugs;
