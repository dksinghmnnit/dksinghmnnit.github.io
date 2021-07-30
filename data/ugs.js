const ugs = [
  {
    title: "Smart Emeotion Detector and Typing Assistant",
    date: "2020",
    author:
      "Shruti Jagwani," +
      "<br/>Khyati Garg," +
      "<br/>Rajat Kumar Gupta," +
      "<br/>Nitesh Kumar",
  },
  {
    title: "Human Activity Recognition by Body Points Sequencing",
    date: "2020",
    author:
      "Mayank Rana," +
      "<br/>Komal Khandelwal," +
      "<br/>Manvi Kishore," +
      "<br/>Juhi Verma",
  },
  {
    title: "Modelling Hand Gestures for Sign Language Translation",
    date: "2020",
    author:
      "Ishank Tyagi," +
      "<br/>Divyansh Soni," +
      "<br/>Kailash Chand Saini," +
      "<br/>Chandan Jyoti Morang",
  },
  {
    title: "Assistive Agent using TFlite by CNN Quantization",
    date: "2019",
    author:
      "Ankur Mishra," +
      "<br/>Akshit Sharma," +
      "<br/>Abhishek Kumar," +
      "<br/>Sourav Kumar," +
      "<br/>Suraj Shah",
  },
  {
    title: "Robust Detection of Duplicated Image Regions",
    date: "2019",
    author:
      "Jatin Tayal," +
      "<br/>Lavkush Chauhan," +
      "<br/>Hemant Kushwah," +
      "<br/>Brajesh Singh," +
      "<br/>Lokajit Subbaraja",
  },
  {
    title: "Smart Agriculture Assistant",
    date: "2019",
    author:
      "Sidhant Kohli," +
      "<br/>Shivam Kumar," +
      "<br/>Yugendra Kumar Sharma," +
      "<br/>SUraj Kumar Mall," +
      "<br/>Ved Prakash",
  },
  {
    title: "Activity Recognition in Live Video",
    date: "2018",
    author:
      "Himanshu Patel," +
      "<br/>Arjav Jain," +
      "<br/>Kaushlam," +
      "<br/>Ajay Kumar Gond," +
      "<br/>Kante Suprabhat",
  },
  {
    title:
      "Scene Understanding via Real Time Object Detection and Visual Question Answering",
    date: "2018",
    author:
      "Utkarsh Ojha," +
      "<br/>Utsav Adhikari," +
      "<br/>Varun yadav," +
      "<br/>Vijay Prakash Dwivedi," +
      "<br/>Raj Kumar",
  },
  {
    title: "Smart Policing System",
    date: "2018",
    author:
      "Sumit Paroothi," +
      "<br/>Shristi Jaiswal," +
      "<br/>Srikanth Karlapati," +
      "<br/>Uttej Cheedalla," +
      "<br/>Banoth Akhil Naik",
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
      "<br/>Alok Kumar Yadav(20108105),Tushar Gangwar(20109020)",
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
