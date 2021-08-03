const talks = [
  {
    type: "Expert Lecture [Online Mode]",
    title: "A practical approach to ANN and Deep Networks",
    description:
      "ATAL FDP on Artificial Intelligence and Machine Learning using Python",
    location: "Engineering College Bikaner, Bikaner (Rajasthan)",
    date: "21 June 2021",
  },
  {
    type: "Expert Lectures and Hands-on-session [Online Mode]",
    description: "5 Days Training Program",
    title: "A Practical Approach to IoT",
    location: "IPS College of Technology and Management, Gwalior (MP)",
    date: " 15th March to 19th March 2021",
  },
  {
    type: "Expert lectures and practical hands-on sessions [Online]",
    title: "Machine Learning and Deep Learning",
    description:
      "One week Workshop-cum-training program on Understanding Deep Learning (WCTP-2021)",
    date: "March 10, 2021 & March 15, 2021",
  },
  {
    type: "Expert Lecture",
    title:
      "‘Machine Vision for Robotic Applications’ and ‘Programming Aspects’",
    description:
      "1 week FDP on Recent Advances & Applications of Machines Learning & IoT in Mechanical Engineering",
    location: "SISTec Bhopal (MP)",
    date: " 22-27 Feb 2021 [25th Aug 2020, Online Mode]",
  },
  {
    type: "Expert Lecture [Online Mode]",
    description: "Webinar",
    title: "Robotic Vision and Applications",
    location: "LNJPIT Chapra, (Bihar)",
    date: "20 Feb 2021",
  },
  {
    type: "Expert Lecture",
    title: "Towards Machine Learning",
    description: "Workshop on Machine Learning and Internet of Things",
    location: "RML Avadh University, Faizabad",
    date: "19-23 February 2021",
  },
  {
    type: "Invited Talk",
    title: "Computer Vision Applications",
    description: "ICCT-2021 conference",
    location: "Invertis University, Bareilly",
    date: "22-23 January, 2021",
  },
  {
    type: "Technical session",
    title: "Intelligent Systems",
    description:
      "3rd International Conference on VLSI, Communication and Signal Processing, held in virtual mode",
    location: "MNNIT Allahabad",
    date: "09-11 October, 2020",
  },
  {
    type: "Expert Lecture [Online Mode]",
    title: "Video Surveillance and AI",
    description: "ATAL FDP on Artificial Intelligence",
    location: "MNNIT Allahabad, Prayagraj (UP)",
    date: "05 October 2020",
  },
  {
    type: "Expert Lecture [Online Mode]",
    description: "Webinar",
    title: "Deep Learning for Object Detection and Classification",
    location: "LNJPIT Chapra, (Bihar)",
    date: "04 October 2020",
  },
  {
    type: "Technical session",
    title: "Computer Vision",
    description:
      "“Congress on Intelligent Systems (CIS-2020)” held in virtual mode under Soft Computing Research Society",
    date: " 05-06 September, 2020",
  },
  {
    type: "Expert Lectures and Hands-on-session",
    description: "7 Days Training Program",
    title: "Python for Machine Learning and Applications",
    location: "IPS College of Technology and Management, Gwalior (MP)",
    date: " 24th Aug to 30th Aug 2020 [Online Mode]",
  },
  {
    type: "Expert Lecture",
    title: "‘Machine Learning’ and ‘Deep Learning’",
    description:
      "STTP on Machine Learning & Deep Learning: Research and Applications Perspectives",
    location: "Poornima College of Engineering, Jaipur (Rajasthan)",
    date: "17th Aug 2020 [Online Mode]",
  },
  {
    type: "Expert Lectures",
    title: "‘Machine Learning’ and ‘Deep Learning’",
    description: "STTP on Machine Learning Applications",
    location: "Alpine Institute of Technology Ujjain (MP)",
    date: "17th and 18th July 2020 [Online Mode]",
  },
  {
    type: "Expert Lecture [Online Mode]",
    description: "Webinar",
    title: "Introduction to Machine Learning with Trends and Challenges",
    location: "ACTS Satna (MP)",
    date: "8th June 2020",
  },
  {
    type: "Expert Lectures [Online Mode]",
    title: "‘Machine Learning’ and ‘Deep Learning’",
    description:
      "STC on Machine Learning to Deep Learning: Trends and Challenges",
    location: "SRIT Jabalpur (MP)",
    date: " 29 - 30 May 2020",
  },
  {
    type: "Expert Lecture [Online Mode]",
    title: "Deep Learning",
    description: "FDP on Mathematical and Computational Modeling",
    location: "LNCTS Bhopal, Bhopal (MP)",
    date: "18 - 20 May 2020",
  },
  {
    type: "Keynote address",
    title:
      "Assistive Technologies for Elderly Peoples and Persons with Disabilities",
    description:
      "Seminar on ‘Need of Technology Development for Better Life of DIVYANGJAN’",
    location: "Patiala University Patiala, Punjab",
    date: "11th March 2020",
  },
  {
    type: "Expert Lecture",
    title: "Deep Learning for Vision",
    description:
      "STTP on Deep Learning for Engineering and Science based Applications",
    location: "LNCTS Bhopal, Bhopal (MP)",
    date: " 14th - 16th Oct 2019",
  },
  {
    type: "Expert Lecture",
    title: "IoT in Computer Vision",
    description: "STTP on Recent trends in IoT",
    location: "REC Bijnor, Bijnor (UP)",
    date: " 30th Sept - 4th Oct 2019",
  },
  {
    type: "Expert Lecture",
    title: "Algorithm Analysis",
    description: "STTP on Data Structures and Algorithms",
    location: "REC Bijnor, Bijnor (UP)",
    date: " 30th Sept - 5th Oct 2019",
  },
  {
    type: "Expert Lecture",
    title: "Object Detection Techniques",
    description:
      "Workshop on Applications of Machine Learning in Signal, Image & Computer Vision",
    location: "BTKIT Dwarahat, Almora",
    date: "07-11 July 2019",
  },
  {
    type: "Expert Lecture",
    title: "Machine Vision",
    description: "Workshop on Machine Learning and Internet of Things",
    location: "RML Avadh University, Faizabad",
    date: " 24-28 June 2019",
  },
  {
    type: "Expert lecture and practical hands-on session",
    title:
      "“Machine Learning Introduction”, “Classification Techniques” & “Towards Deep Learning”",
    description: "One week workshop on Computational Intelligence (WCI-2019)",
    date: "June 17, 2019 & June 22, 2019",
  },
  {
    type: "Expert lecture and practical hands-on session",
    title: "“Image Processing Introduction” & “Computer & Machine Vision”",
    description: "One week workshop on Image and Video Analytics (WIVA-2019)",
    date: "June 10, 2019 & June 15, 2019",
  },
  {
    type: "Expert Lecture",
    title: "Computer and Machine Vision",
    description:
      "One week AICTE-QIP STC on Trends and Techniques in Image Processing, Multimedia and Security Issues",
    location: "MITS Gwalior",
    date: " 15-19 March 2019",
  },
  {
    type: "Expert Lecture",
    title: "Machine Vision for Surveillance",
    description:
      "National Workshop on Image Processing and Computer Vision Applications",
    location: "REC Ambedkar Nagar",
    date: "05-09 March 2019",
  },
  {
    type: "Expert Lecture",
    title: "Robotic Vision",
    description: "Faculty Development Program on Automation and Robotics",
    location: "Ambalika Institute of Management & Technology, Lucknow",
    date: "21-25 Jan 2019",
  },
  {
    type: "Technical Session",
    title: "4th NGCT-2018 conference",
    location: "University of Petroleum and Energy Studies (UPES), Dehradun",
    date: "21-22 November, 2018",
  },
  {
    type: "Expert Lecture and practical hands-on session",
    title: "‘Computer Vision’ & ‘Machine Learning’",
    location: "Dept of CSE, MNNIT Allahabad",
    description: "Summer Training Program ETCS-2018",
    date: "June-July 2018",
  },
  {
    type: "Technical Session",
    title: "Image Analysis and Computer Vision",
    description: "IC3E conference",
    location:
      "J K Institute of Applied Physics and Technology, Allahabad University, Allahabad",
    date: "13-14 April, 2018",
  },
  {
    type: "Expert lecture and practical hands-on session",
    title:
      "“Image Processing Introduction”, “Computer & Machine Vision” & “Object Detection Techniques”",
    description: "One week workshop on Image and Video Analytics (WIVA-2018)",
    date: "March 29, 2018 & April 2, 2018",
  },
  {
    type: "Technical Session",
    title: "ICRTCMSIT-2018 conference",
    location: "Bundelkhand University, Jhansi",
    date: "09-11 March, 2018",
  },
  {
    type: "Invited talk",
    title: "Computer and Machine Vision",
    description: "ICRTCMSIT-2018 conference",
    location: "Bundelkhand University, Jhansi",
    date: "09-11 March, 2018",
  },
  {
    type: "Chaired session",
    title: "ICSGRC-2017",
    location: "UiTM Kuala Lumpur, Malaysia",
    date: "4-5 August 2017",
  },
  {
    type: "Expert lecture and practical handshaking",
    title: "Internet of Things",
    location: "MNNIT Allahabad",
    description: "Summer Training Program ETCS-2017",
    date: "June-July 2017",
  },
  {
    type: "Expert Lecture",
    title: "Computer Vision with MATLAB",
    description:
      "Workshop on MATLAB Applications in Science, Technology & Management",
    location: "SMS, MNNIT Allahabad",
    date: " 1-7 December 2016",
  },
  {
    type: "Invited talk",
    title: "Machine Vision",
    location: "CSI Allahabad Chapter meeting",
    date: "05/11/2016",
  },
  {
    type: "Expert lectures",
    title: "Python Programming",
    location: "MNNIT Allahabad",
    description: "Summer Training Program ETCS-2016",
    date: "June-July 2016",
  },
  {
    type: "Expert Lecture",
    title: "Information Security",
    description: "Workshop SRAKSHA-2016 [under ISEA project]",
    location: "MNNIT Allahabad",
    date: "17-21 March 2016",
  },
  {
    type: "Expert Lecture",
    title: "Image Processing: An Introduction",
    description: "Workshop SIMDOC-2015 ",
    location: "MNNIT Allahabad",
    date: "14-18 December 2015",
  },
  {
    type: "Expert Lecture",
    title: "Hardware Security",
    description: "Workshop SURAKSHA-2015",
    location: "MNNIT Allahabad",
    date: "19-23 August 2015",
  },
  {
    type: "Expert lectures",
    title: "Embedded System Design ",
    location: "MNNIT Allahabad",
    description: "Summer Training Program ETCS-2015",
    date: "June-July 2015",
  },
  {
    type: "Guest lectures",
    title: "Embedded System & Technologies",
    location: "Poornima College of Engineering, Jaipur",
    date: "Summer 2012",
    description: "MTech Program",
  },
];

export default talks;
