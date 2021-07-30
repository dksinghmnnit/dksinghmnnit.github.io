//Journals
import journals from "../data/journals.js";
journals.forEach((journal) => {
  $("#journals").append(timelineItemHTML(journal));
});
// console.log(journals.reverse());

//conferences
import conferences from "../data/conferences.js";
conferences.forEach((conference) => {
  $("#conferences").append(timelineItemHTML(conference));
});
// console.log(conferences.reverse());

//bookchapters
import bookchapters from "../data/bookchapters.js";
bookchapters.forEach((bookchapter) => {
  $("#bookchapters").append(timelineItemHTML(bookchapter));
});
// console.log(bookchapters.reverse());

//PhD
import phds from "../data/phds.js";
phds.forEach((phd, key) => {
  $("#phds").append(phdHTML(phd, key));
});
function phdHTML(phd, key) {
  return (
    '<div class="timeline-item" style=" display: flex; flex-direction: row; gap: 30px; align-items: center;">' +
    "<div>" +
    '<img class="img-thumbnail img-circle"' +
    'src="images/phd/img_' +
    (key + 1) +
    '.jpg"' +
    'alt="' +
    phd.author +
    '"' +
    'style="min-width: 5em; max-width: 8em"' +
    "/>" +
    "</div>" +
    "<div>" +
    '<h4 class="item-title">' +
    phd.title +
    "</h4>" +
    '<span class="item-period">' +
    phd.date +
    "</span>" +
    '<span class="item-small">' +
    phd.status +
    "</span>" +
    '<p class="item-description">' +
    phd.author +
    "</p>" +
    "</div>" +
    "</div>"
  );
}

//mtech
import mtechs from "../data/mtechs.js";
mtechs.forEach((mtech) => {
  $("#mtechs").append(timelineItemExtendedHTML(mtech.title,mtech.branch,mtech.date,mtech.author));
});

//ug
import ugs from "../data/ugs.js";
ugs.forEach((ug) => {
  $("#ugs").append(timelineItemExtendedHTML(ug.title,"",ug.date,ug.author));
});

//outside
import outsides from "../data/outsides.js";
outsides.forEach((outside) => {
  $("#outsides").append(timelineItemExtendedHTML(outside.title,outside.college,outside.date,outside.author));
});

$(window).on("load", function () {
  //initialize the firebase app
  var config = {
    apiKey: "AIzaSyCYCPnc6u4zVNq3zfV7_tQnFPpyqSID9i0",
    authDomain: "dushyantmnnit.firebaseapp.com",
    databaseURL: "https://dushyantmnnit.firebaseio.com",
    projectId: "dushyantmnnit",
    storageBucket: "dushyantmnnit.appspot.com",
    messagingSenderId: "492197625130",
    appId: "1:492197625130:web:94b937a005976fd6",
  };
  firebase.initializeApp(config);

  //create firebase references
  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var projectsRef = dbRef.ref("projects");
  var prjctRef = dbRef.ref("prjct");
  var workshopRef = dbRef.ref("workshop");
  var usersRef = dbRef.ref("users");
  var reviewRef = dbRef.ref("review");
  // var storageRef = firebase.storage().ref();
  var auth = null;

  auth = "IFkp0bAQDncyI7sIiG4p94Fdb5L2";

  var temp;

  usersRef
    .child(auth)
    .once("value")
    .then(function (data) {
      var info = data.val();
      temp = info.firstName + " " + info.lastName;
      //console.log(temp);
      if (info.photoUrl) {
        var img = new Image();
        $(img)
          .on("load", function () {
            $(".user-info").append($(this));
            $(".user-info").closest(".photo").show();
          })
          .attr({
            src: info.photoUrl,
            alt: "Dushyant Profile Picture",
          });
      }
      $("#fireres").append(
        '<a href="' +
          info.resumeUrl +
          '" class="btn btn-secondary">Download Resume</a>'
      );
      info = data.val();
      var cllgname;

      if (info.email) {
        //console.log(temp);
        $(".adinfo").append(
          '<div class="card project" style="width:98%;border-radius:30px;box-shadow: 3px 3px grey;">' +
            '<div class="card-body">' +
            '<h4 class="card-title">' +
            "Hi, " +
            info.firstName +
            "</h4>" +
            "<hr/>" +
            "<h4>Your Profile</h4><hr/>" +
            "<h6><strong>Name: - </strong><br/>" +
            info.firstName +
            " " +
            info.lastName +
            "</h6><br/> " +
            "<h6><strong>Email: - </strong><br/>" +
            info.email +
            "</h6><br/> " +
            "<h6><strong>Mobile No.: - </strong><br/>" +
            info.mob +
            "</h6><br/> " +
            "<h6><strong>Qualification: - </strong><br/>" +
            info.qual +
            "</h6><br/> " +
            "<h6><strong>College: - </strong><br/>" +
            cllgname +
            "<h6><br/> " +
            "</p>" +
            "</div>" +
            "</div>"
        );
      }
      projectsRef.child(auth).on("child_added", onChildAdd);
      prjctRef.child(auth).on("child_added", onPrjctAdd);
      workshopRef.child(auth).on("child_added", onWorkshopAdd);
      reviewRef.child(auth).on("child_added", onReviewAdd);
    });
});

function onChildAdd(snap) {
  $("#blogs").append(projectHtmlFromObject(snap.key, snap.val()));
}

//prepare project object's HTML
function projectHtmlFromObject(key, project) {
  return (
    '<div class="item">' +
    ' <div class="blog-card">' +
    '<div class="media-block">' +
    ' <a href="blog/blog-post.html?pagekey=' +
    project.id +
    '">' +
    ' <img class="post-image img-responsive" src="' +
    project.blogimg +
    '" alt="blog-post" />' +
    '<div class="mask"></div>' +
    '<div class="post-date"><span class="month">' +
    project.date +
    "</span></div>" +
    "</a>" +
    "</div>" +
    '<div class="post-info">' +
    ' <ul class="category' +
    '  <li><a href="#">' +
    project.subject +
    "</a></li>" +
    "</ul>" +
    '<a href="blog/blog-post.html?pagekey=' +
    project.id +
    '"><h4 class="blog-item-title">' +
    project.title +
    "</h4></a>" +
    "</div>" +
    "</div>" +
    "</div>"
  );
}

function onPrjctAdd(snap) {
  $("#prjct").append(projectHtmlFromPrjct(snap.key, snap.val()));
}

//prepare project object's HTML
function projectHtmlFromPrjct(key, prjct) {
  return (
    '<div class="item row" style="box-shadow: 2px 2px #29B6F6;">' +
    ' <div class="blog-card col-sm-12 col-md-7">' +
    '<div class="media-block">' +
    ' <a href="projects/project.html?pagekey=' +
    prjct.id +
    '">' +
    ' <img class="post-image img-responsive" src="' +
    prjct.prjctimg +
    '" alt="blog-post" />' +
    '<div class="mask"></div>' +
    '<div class="post-date"><span class="month">' +
    prjct.date +
    "</span></div>" +
    "</a>" +
    "</div>" +
    '<div class="post-info">' +
    ' <ul class="category' +
    '  <li><a href="#">' +
    prjct.subject +
    "</a></li>" +
    "</ul>" +
    '<a href="projects/project.html?pagekey=' +
    prjct.id +
    '"><h4 class="blog-item-title">' +
    prjct.title +
    "</h4></a>" +
    "</div>" +
    "</div>" +
    '<div class="blog-card col-sm-10 col-md-5 ">' +
    "<h3><strong>" +
    prjct.title +
    "</strong></h3>" +
    "<i>" +
    prjct.date +
    "</i><br/>" +
    prjct.subject +
    "<hr/>" +
    prjct.description +
    "<br/>" +
    "</div>" +
    "</div>" +
    "<br/><br/>"
  );
}

function onWorkshopAdd(snap) {
  $("#workshop").append(projectHtmlFromWorkshop(snap.key, snap.val()));
}

//prepare workshop object's HTML
function projectHtmlFromWorkshop(key, workshop) {
  return (
    '<div class="timeline-item">' +
    '<p class="item-description">' +
    workshop.wentry +
    "</p>" +
    "</div>"
  );
}

function onReviewAdd(snap) {
  $("#review").prepend(projectHtmlFromReview(snap.key, snap.val()));
}

//prepare conference object's HTML
function projectHtmlFromReview(key, review) {
  return (
    '<div class="timeline-item">' +
    '<p class="item-description">' +
    review.rvwentry +
    "</div>"
  );
}

//prepare timelineitem object's HTML
function timelineItemHTML(itemdata) {
  return (
    '<div class="timeline-item">' +
    '<p class="item-description">' +
    itemdata +
    "</p>" +
    "</div>"
  );
}

//prepare timelineitemextended object's HTML
function timelineItemExtendedHTML(title,subtitle,period,description) {
  return (
    '<div class="timeline-item">' +
    "<div>" +
    '<h4 class="item-title">' +
    title +
    "</h4>" +
    '<span class="item-period">' +
    period +
    "</span>" +
    '<span class="item-small">' +
    subtitle +
    "</span>" +
    '<p class="item-description">' +
    description +
    "</p>" +
    "</div>" +
    "</div>"
  );
}