---
---

//// Selection Criteria
//
//var county_sel = document.getElementById("county_select");
//var const_sel = document.getElementById("const_select");
//var ward_sel = document.getElementById("ward_select");
//
//var found_reg = document.getElementById("found-reg");
//var loading_gif = document.getElementById("loading_gif");
//
//var header_name = document.getElementById("header-name");
//
//var county_code = 1;
//
//var const_code = [];
//var const_name = [];
//var ward_code = [];
//var ward_name = [];
//var ward_reg_code = [];
//var ward_reg_name = [];
//var centre_code = [];
//var centre_name = [];
//
//
////Fusion Table Variables
//
//var json_result;
//
//var get_url = "https://www.googleapis.com/fusiontables/v2/query?sql=";
//var sql_1 = encodeURIComponent("SELECT * FROM ");
//var sql_2 = encodeURIComponent(" WHERE 'County Code' = " + county_code);
//var api_key = "&key={{ site.api_key }}";
//
//var table_id = "{{ site.table_id }}";
//
//county_sel.onchange = function () {
//
//  if (county_sel.value == 0) {
//    //Selected Default
//    county_sel.options[county_code].selected = "true";
//  } else {
//    if (county_sel.options[0].value == 0) {
//      county_sel.remove(0);
//    }
//    const_sel.innerHTML = "<option value=\"0\">Loading Constituencies... </option>";
////    ward_sel.innerHTML = "<option value=\"0\">Loading Wards...</option>";
//
//    header_name.innerHTML = unescape(toTitleCase(escape(county_sel.options[county_sel.selectedIndex].innerHTML))) + " Region";
//
//    $("#reg-centres").html("<tr><td>" +
//        "<p><img src=\"img/spinner.gif\" alt=\"\" />" +
//        "Finding registration centres...</p></td></tr>");
//    $("#found-reg").slideDown('fast');
//
//    county_code = county_sel.value;
//    sql_2 = encodeURIComponent(" WHERE 'County Code' = " + county_code);
//    run_get_centres(table_id);
//  }
//};
//
//const_sel.onchange = function () {
//  if (const_sel.value == 0) {
//    //Do Nothing. No County Selected.
//  } else {
//    var del_no = ward_code.length;
//    for (var i = 0; i < del_no; i++) {
//      ward_code.pop();
//      ward_name.pop();
//    }
//    del_no = ward_reg_code.length;
//    for (var i = 0; i < del_no; i++) {
//      ward_reg_code.pop();
//      ward_reg_name.pop();
//    }
//    del_no = centre_code.length;
//    for (var i = 0; i < del_no; i++) {
//      centre_code.pop();
//      centre_name.pop();
//    }
//
//    for (var i = 0; i < json_result.rows.length; i++) {
//      if (json_result.rows[i][3] == const_sel.value) {
//        if (ward_code.length == 0) {
//          ward_code[0] = json_result.rows[i][5];
//          ward_name[0] = json_result.rows[i][6];
//          ward_reg_code[0] = json_result.rows[i][7];
//          ward_reg_name[0] = json_result.rows[i][8];
//          centre_code[0] = json_result.rows[i][0];
//          centre_name[0] = json_result.rows[i][9];
//        } else {
//          var ward_already = 0;
//          for (var c = 0; c < ward_code.length; c++) {
//            if (ward_code[c] == json_result.rows[i][5]) {
//              ward_already = 1;
//            }
//          }
//          if (ward_already == 0) {
//            ward_code[ward_code.length] = json_result.rows[i][5];
//            ward_name[ward_code.length - 1] = json_result.rows[i][6];
//          }
//
//          if (json_result.rows[i][5] == ward_code[0]) {
//            var ward_reg_already = 0;
//            for (var c = 0; c < ward_reg_code.length; c++) {
//              if (ward_reg_code[c] == json_result.rows[i][7]) {
//                ward_reg_already = 1;
//              }
//            }
//            if (ward_reg_already == 0) {
//              ward_reg_code[ward_reg_code.length] = json_result.rows[i][7];
//              ward_reg_name[ward_reg_code.length - 1] = json_result.rows[i][8];
//            }
//
//            centre_code[centre_code.length] = json_result.rows[i][0];
//            centre_name[centre_code.length - 1] = json_result.rows[i][9];
//          }
//        }
//      }
//    }

//    ward_sel.innerHTML = "";
//    for (var i = 0; i < ward_code.length; i++) {
//      ward_sel.innerHTML += "<option value=\"" + ward_code[i] + "\">" + toTitleCase(ward_name[i]) + "</option>";
//    }

//    $("#reg-centres").html("");
//    for (var i = 0; i < ward_reg_code.length; i++) {
//      $("#reg-centres").html($("#reg-centres").html() +
//          "<tr><td><p>" + toTitleCase(ward_reg_name[i]) + "</p></td></tr>");
//    }
    // $("#other-centres").html("");
    // for (var i = 0; i < centre_code.length; i++) {
    //   $("#other-centres").html($("#other-centres").html() +
    //       "<tr><td><p>" + toTitleCase(centre_name[i]) + "</p></td></tr>");
    // }

//    header_name.innerHTML = unescape(toTitleCase(escape(ward_name[0]))) + " Ward";
//  }
//};

//ward_sel.onchange = function () {
//  if (const_sel.value == 0) {
//    //Do Nothing. No County Selected.
//  } else {
//    var del_no = ward_reg_code.length;
//    for (var i = 0; i < del_no; i++) {
//      ward_reg_code.pop();
//      ward_reg_name.pop();
//    }
//    del_no = centre_code.length;
//    for (var i = 0; i < del_no; i++) {
//      centre_code.pop();
//      centre_name.pop();
//    }
//
//    for (var i = 0; i < json_result.rows.length; i++) {
//      if (json_result.rows[i][5] == ward_sel.value) {
//        var ward_reg_already = 0;
//        for (var c = 0; c < ward_reg_code.length; c++) {
//          if (ward_reg_code[c] == json_result.rows[i][7]) {
//            ward_reg_already = 1;
//          }
//        }
//        if (ward_reg_already == 0) {
//          ward_reg_code[ward_reg_code.length] = json_result.rows[i][7];
//          ward_reg_name[ward_reg_code.length - 1] = json_result.rows[i][8];
//        }
//
//        centre_code[centre_code.length] = json_result.rows[i][0];
//        centre_name[centre_code.length - 1] = json_result.rows[i][9];
//      }
//    }
//
//    $("#reg-centres").html("");
//    for (var i = 0; i < ward_reg_code.length; i++) {
//      $("#reg-centres").html($("#reg-centres").html() +
//          "<tr><td><p>" + toTitleCase(ward_reg_name[i]) + "</p></td></tr>");
//    }
//    // $("#other-centres").html("");
//    // for (var i = 0; i < centre_code.length; i++) {
//    //   $("#other-centres").html($("#other-centres").html() +
//    //       "<tr><td><p>" + toTitleCase(centre_name[i]) + "</p></td></tr>");
//    // }
//
//    header_name.innerHTML = unescape(toTitleCase(escape(ward_sel.options[ward_sel.selectedIndex].text))) + " Ward";
//  }
//};


// Fusion Table Script

//function run_get_centres(table_id) {
//  var xmlhttp;
//  if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
//    xmlhttp = new XMLHttpRequest();
//  } else { // code for IE6, IE5
//    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//  }
//
//  xmlhttp.onreadystatechange = function () {
//    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//      json_result = jQuery.parseJSON(xmlhttp.responseText);
//
//      // Remove all the options from array
//      var del_no = const_code.length;
//      for (var i = 0; i < del_no; i++) {
//        const_code.pop();
//        const_name.pop();
//      }
//      del_no = ward_code.length;
//      for (var i = 0; i < del_no; i++) {
//        ward_code.pop();
//        ward_name.pop();
//      }
//      del_no = ward_reg_code.length;
//      for (var i = 0; i < del_no; i++) {
//        ward_reg_code.pop();
//        ward_reg_name.pop();
//      }
//      del_no = centre_code.length;
//      for (var i = 0; i < del_no; i++) {
//        centre_code.pop();
//        centre_name.pop();
//      }
//
//      // Recurse all rows
//      for (var i = 0; i < json_result.rows.length; i++) {
//        // Check if first row
//        if (i == 0) {
//          const_code[0] = json_result.rows[0][3];
//          const_name[0] = json_result.rows[0][4];
//          ward_code[0] = json_result.rows[0][5];
//          ward_name[0] = json_result.rows[0][6];
//          ward_reg_code[0] = json_result.rows[0][7];
//          ward_reg_name[0] = json_result.rows[0][8];
//          centre_code[0] = json_result.rows[i][0];
//          centre_name[0] = json_result.rows[i][9];
//          // If not first row
//        } else {
//          var const_already = 0;
//          // Recurse for all const_code set
//          for (var c = 0; c < const_code.length; c++) {
//            // If constituency already exists
//            if (const_code[c] == json_result.rows[i][3]) {
//              const_already = 1;
//            }
//          }
//          // If constituency not set, set
//          if (const_already == 0) {
//            const_code[const_code.length] = json_result.rows[i][3];
//            const_name[const_code.length - 1] = json_result.rows[i][4];
//          }
//
//          // Set data for only the selected constituency
//          if (json_result.rows[i][3] == const_code[0]) {
//            var ward_already = 0;
//            for (var c = 0; c < ward_code.length; c++) {
//              if (ward_code[c] == json_result.rows[i][5]) {
//                ward_already = 1;
//              }
//            }
//            if (ward_already == 0) {
//              ward_code[ward_code.length] = json_result.rows[i][5];
//              ward_name[ward_code.length - 1] = json_result.rows[i][6];
//            }
//
//            // Set data only for the selected ward
//            if (json_result.rows[i][5] == ward_code[0]) {
//
//              var ward_reg_already = 0;
//              for (var c = 0; c < ward_reg_code.length; c++) {
//                if (ward_reg_code[c] == json_result.rows[i][7]) {
//                  ward_reg_already = 1;
//                }
//              }
//              if (ward_reg_already == 0) {
//                ward_reg_code[ward_reg_code.length] = json_result.rows[i][7];
//                ward_reg_name[ward_reg_code.length - 1] = json_result.rows[i][8];
//              }
//
//              centre_code[centre_code.length] = json_result.rows[i][0];
//              centre_name[centre_code.length - 1] = json_result.rows[i][9];
//            }
//          }
//        }
//      }
//
//
//      const_sel.innerHTML = "";
//      for (var i = 0; i < const_code.length; i++) {
//        const_sel.innerHTML += "<option value=\"" + const_code[i] + "\">" + toTitleCase(const_name[i]) + "</option>";
//      }
//      ward_sel.innerHTML = "";
//      for (var i = 0; i < ward_code.length; i++) {
//        ward_sel.innerHTML += "<option value=\"" + ward_code[i] + "\">" + toTitleCase(ward_name[i]) + "</option>";
//      }

//      $("#reg-centres").html("");
//      for (var i = 0; i < ward_reg_code.length; i++) {
//        $("#reg-centres").html($("#reg-centres").html() +
//            "<tr><td><p>" + toTitleCase(ward_reg_name[i]) + "</p></td></tr>");
//      }
//
//      header_name.innerHTML = unescape(toTitleCase(escape(ward_name[0]))) + " Ward";
//      header_name.innerHTML = unescape(toTitleCase(escape(const_name[0]))) + " Constituency";
//
//    }
//  };
//  xmlhttp.open("GET", get_url + sql_1 + table_id + sql_2 + api_key, true);
//  xmlhttp.send();
//}


// On Window load

window.onload = function () {

};


// Other Functions

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}


function goToByScroll(id) {
  // Remove "link" from the ID
  id = id.replace("link", "");
  // Scroll
  $('html,body').animate({
        scrollTop: $('a[name="' + id + '"]').offset().top
      },
      'slow');
}

$("#jumbotron > a").click(function (e) {
  // Prevent a page reload when a link is pressed
  e.preventDefault();
  // Call the scroll function
  goToByScroll($(this).attr("id"));
});


/** New find a registration center js **/

DATA = {
    "Mombasa": [{
        "county": "Mombasa",
        "constituency": "Changamwe",
        "office_location": "Changamwe At The Fire Station",
        "contact": "0721674260",
        "most_conspicuous_landmark": "Changamwe Fire Station",
        "distance_from_landmark": ""
    }, {
        "county": "Mombasa",
        "constituency": "Jomvu",
        "office_location": "Mkindani At The Ap Post",
        "contact": "0722838956",
        "most_conspicuous_landmark": "Mkindani Ap Post",
        "distance_from_landmark": ""
    }, {
        "county": "Mombasa",
        "constituency": "Kisauni",
        "office_location": "Along Dr. Felix Mandi Avenue,Behind The District H/Q Kisauni, Bamburi Mtamboni.",
        "contact": "0722578822",
        "most_conspicuous_landmark": "District H/Q",
        "distance_from_landmark": ""
    }, {
        "county": "Mombasa",
        "constituency": "Nyali",
        "office_location": "Links Road West Bank Villa",
        "contact": "0723994319",
        "most_conspicuous_landmark": "Mamba Village",
        "distance_from_landmark": ""
    }, {
        "county": "Mombasa",
        "constituency": "Likoni",
        "office_location": "Likoni School For The Blind",
        "contact": "0722534218",
        "most_conspicuous_landmark": "Likoni Police Station",
        "distance_from_landmark": ""
    }, {
        "county": "Mombasa",
        "constituency": "Mvita",
        "office_location": "Baluchi Complex",
        "contact": "0721639975",
        "most_conspicuous_landmark": "Central Ploice Station",
        "distance_from_landmark": ""
    }],
    "Kwale": [{
        "county": "Kwale",
        "constituency": "Msambweni",
        "office_location": "Msambweni",
        "contact": "0726939035",
        "most_conspicuous_landmark": "Youth Office",
        "distance_from_landmark": ""
    }, {
        "county": "Kwale",
        "constituency": "Lunga Lunga",
        "office_location": "Opposite Lunga Lunga Matatu Stage On The Main Road To Tanzania",
        "contact": "0722 906 450",
        "most_conspicuous_landmark": "Lunga Lunga Petrol Station",
        "distance_from_landmark": ""
    }, {
        "county": "Kwale",
        "constituency": "Matuga",
        "office_location": "Opposite Kwale county Government Office",
        "contact": "0722247228",
        "most_conspicuous_landmark": "Ministry Of Finance Office Kwale county",
        "distance_from_landmark": ""
    }, {
        "county": "Kwale",
        "constituency": "Kinango",
        "office_location": "Kinango Town,Next To Ministry Of Lands 1st Floor,At Junction Off- Kinango Ndavaya Road",
        "contact": "0710996924",
        "most_conspicuous_landmark": "Kinango Town,Next To Ministry Of Lands 1st Floor,At Junction Off-Kinango Ndavaya Road",
        "distance_from_landmark": ""
    }],
    "Kilifi": [{
        "county": "Kilifi",
        "constituency": "Kilifi North",
        "office_location": "Next To county Commissioners Office",
        "contact": "0716545971",
        "most_conspicuous_landmark": "Kilifi Bridge",
        "distance_from_landmark": "500m"
    }, {
        "county": "Kilifi",
        "constituency": "Kilifi South",
        "office_location": "Opposite Co-Operative Bank",
        "contact": "0720812025",
        "most_conspicuous_landmark": "Mtwapa Police Station",
        "distance_from_landmark": "1 Km"
    }, {
        "county": "Kilifi",
        "constituency": "Kaloleni",
        "office_location": "Opposite St John Ack Church",
        "contact": "0720494548",
        "most_conspicuous_landmark": "St. Johns Ack Church",
        "distance_from_landmark": "100m"
    }, {
        "county": "Kilifi",
        "constituency": "Rabai",
        "office_location": "Rabai District Hqs",
        "contact": "0721 401 671/",
        "most_conspicuous_landmark": "Kombeni Girls Sec School",
        "distance_from_landmark": "500 M (0.5 Km)"
    }, {
        "county": "Kilifi",
        "constituency": "Ganze",
        "office_location": "Ganze Commissioners Sub county Office",
        "contact": "0710122290/0733 448 541",
        "most_conspicuous_landmark": "Ganze",
        "distance_from_landmark": "500m"
    }, {
        "county": "Kilifi",
        "constituency": "Malindi",
        "office_location": "Opposite Malindi Law Court",
        "contact": "0720472800",
        "most_conspicuous_landmark": "Malindi Law Court",
        "distance_from_landmark": "30m"
    }, {
        "county": "Kilifi",
        "constituency": "Magarini",
        "office_location": "Near Mwembe Resort",
        "contact": "0722804766",
        "most_conspicuous_landmark": "Catholic Institute",
        "distance_from_landmark": "300m"
    }],
    "Tana River": [{
        "county": "Tana River",
        "constituency": "Garsen",
        "office_location": "Garsen Behind Methodist Church",
        "contact": "0725344022",
        "most_conspicuous_landmark": "Methodist Church",
        "distance_from_landmark": "100m"
    }, {
        "county": "Tana River",
        "constituency": "Galole",
        "office_location": "Hola Town",
        "contact": "0722411216",
        "most_conspicuous_landmark": "Tana River",
        "distance_from_landmark": "1 Km"
    }, {
        "county": "Tana River",
        "constituency": "Bura",
        "office_location": "Bura Irrigation Scheme",
        "contact": "0726501289",
        "most_conspicuous_landmark": "Bura Irrigation Scheme",
        "distance_from_landmark": ""
    }],
    "Lamu": [{
        "county": "Lamu",
        "constituency": "Lamu East",
        "office_location": "Faza Town",
        "contact": "0723777504",
        "most_conspicuous_landmark": "Registration Of Persons Office",
        "distance_from_landmark": "100 Metres"
    }, {
        "county": "Lamu",
        "constituency": "Lamu West",
        "office_location": "Mokowe Cooperative Building",
        "contact": "0723777504",
        "most_conspicuous_landmark": "Police Post",
        "distance_from_landmark": "100 M."
    }],
    "Taita Taveta": [{
        "county": "Taita Taveta",
        "constituency": "Taveta",
        "office_location": "Taveta Railway Station",
        "contact": "0720796961",
        "most_conspicuous_landmark": "Taveta Railway Station Godown No.2",
        "distance_from_landmark": ""
    }, {
        "county": "Taita Taveta",
        "constituency": "Wundanyi",
        "office_location": "Iebc Building Next To Dos Office Wundanyi",
        "contact": "0721353656",
        "most_conspicuous_landmark": "Dos Office",
        "distance_from_landmark": ""
    }, {
        "county": "Taita Taveta",
        "constituency": "Mwatate",
        "office_location": "Levi Building Along Mwatate Wundayi Road",
        "contact": "0726544112",
        "most_conspicuous_landmark": "Kenyatta High School, Mwatate",
        "distance_from_landmark": ""
    }, {
        "county": "Taita Taveta",
        "constituency": "Voi",
        "office_location": "Scripture Mission - Voi",
        "contact": "0722 358265",
        "most_conspicuous_landmark": "Coast Institute Of Technology (Cit)",
        "distance_from_landmark": ""
    }, {
        "county": "Garissa",
        "constituency": "Garissa Township",
        "office_location": "Off Lamu Road, Behind Ministry Of Water Garage",
        "contact": "254720617740",
        "most_conspicuous_landmark": "",
        "distance_from_landmark": ""
    }],
    "Garissa": [{
        "county": "Garissa",
        "constituency": "Balambala",
        "office_location": "Balambala Town Next To Dc’s Office.",
        "contact": "254711993563",
        "most_conspicuous_landmark": "",
        "distance_from_landmark": ""
    }, {
        "county": "Garissa",
        "constituency": "Lagdera",
        "office_location": "Modogashe Town, Opposite Police Station.",
        "contact": "254722348869",
        "most_conspicuous_landmark": "",
        "distance_from_landmark": ""
    }, {
        "county": "Garissa",
        "constituency": "Dadaab",
        "office_location": "Dadaab Town, Opposite Un Compound.",
        "contact": "254722242632",
        "most_conspicuous_landmark": "",
        "distance_from_landmark": ""
    }, {
        "county": "Garissa",
        "constituency": "Fafi",
        "office_location": "Next To Dc’s Office.",
        "contact": "254722966962",
        "most_conspicuous_landmark": "",
        "distance_from_landmark": ""
    }, {
        "county": "Garissa",
        "constituency": "Ijara",
        "office_location": "Masalani Town, Next To Dc’s Office.",
        "contact": "254722624061",
        "most_conspicuous_landmark": "",
        "distance_from_landmark": ""
    }],
    "Wajir": [{
        "county": "Wajir",
        "constituency": "Wajir North",
        "office_location": "Bute",
        "contact": "0720310603",
        "most_conspicuous_landmark": "Police Station",
        "distance_from_landmark": "100m"
    }, {
        "county": "Wajir",
        "constituency": "Wajir East",
        "office_location": "Wajir",
        "contact": "0725473474",
        "most_conspicuous_landmark": "Alfurqan Integrated",
        "distance_from_landmark": "200m"
    }, {
        "county": "Wajir",
        "constituency": "Tarbaj",
        "office_location": "Tarbaj",
        "contact": "0711258328",
        "most_conspicuous_landmark": "Tarbaj District Hospital",
        "distance_from_landmark": "50m"
    }, {
        "county": "Wajir",
        "constituency": "Wajir West",
        "office_location": "Giriftu",
        "contact": "0713670459",
        "most_conspicuous_landmark": "Griftu District Hospital",
        "distance_from_landmark": "50m"
    }, {
        "county": "Wajir",
        "constituency": "Eldas",
        "office_location": "Eldas",
        "contact": "0721350072",
        "most_conspicuous_landmark": "Dc ‘S Residence",
        "distance_from_landmark": "50m"
    }, {
        "county": "Wajir",
        "constituency": "Wajir South",
        "office_location": "Habaswein",
        "contact": "0728874994",
        "most_conspicuous_landmark": "Police Station",
        "distance_from_landmark": "5km"
    }],
    "Mandera": [{
        "county": "Mandera",
        "constituency": "Mandera West",
        "office_location": "Takaba",
        "contact": "0710533453",
        "most_conspicuous_landmark": "Ap Line",
        "distance_from_landmark": "50m"
    }, {
        "county": "Mandera",
        "constituency": "Banisa",
        "office_location": "Banisa",
        "contact": "0725043532",
        "most_conspicuous_landmark": "Dc’s Office",
        "distance_from_landmark": "100m"
    }, {
        "county": "Mandera",
        "constituency": "Mandera North",
        "office_location": "Rhamu",
        "contact": "0714211685",
        "most_conspicuous_landmark": "Post Office",
        "distance_from_landmark": "30m"
    }, {
        "county": "Mandera",
        "constituency": "Mandera South",
        "office_location": "El-Wak",
        "contact": "0722616402",
        "most_conspicuous_landmark": "El-Wak Service Station",
        "distance_from_landmark": "30m"
    }, {
        "county": "Mandera",
        "constituency": "Mandera East",
        "office_location": "Mandera",
        "contact": "0721644824",
        "most_conspicuous_landmark": "Nhif Office",
        "distance_from_landmark": "20m"
    }, {
        "county": "Mandera",
        "constituency": "Lafey",
        "office_location": "Lafey",
        "contact": "0720386479",
        "most_conspicuous_landmark": "Dc’s Office",
        "distance_from_landmark": "20m"
    }],
    "Marsabit": [{
        "county": "Marsabit",
        "constituency": "Moyale",
        "office_location": "Moyale Town Centre, Along Thika Road, Opposite Equity Bank",
        "contact": "0722444886",
        "most_conspicuous_landmark": "Along Thika Road, Opposite Equity Bank",
        "distance_from_landmark": "150 Metres"
    }, {
        "county": "Marsabit",
        "constituency": "North Horr",
        "office_location": "Behind Administrative Police Station",
        "contact": "0721350892",
        "most_conspicuous_landmark": "Behind Administrative Police Station",
        "distance_from_landmark": "500 Metres"
    }, {
        "county": "Marsabit",
        "constituency": "Saku",
        "office_location": "Saku Town, On 1st Floor Caltex Petrol Station Building, Opposite Marsabit Stadium",
        "contact": "0721920437",
        "most_conspicuous_landmark": "Caltex Petrol Station Building, Opposite Marsabit Stadium",
        "distance_from_landmark": "100 Metres"
    }, {
        "county": "Marsabit",
        "constituency": "Laisamis",
        "office_location": "Laisamis Town, Opposite Laisamis Primary School",
        "contact": "0726403103",
        "most_conspicuous_landmark": "Opposite Laisamis Primary School",
        "distance_from_landmark": "50 Metres"
    }],
    "Isiolo": [{
        "county": "Isiolo",
        "constituency": "Isiolo North",
        "office_location": "Isiolo Town, Opposite Isiolo county Government Offices",
        "contact": "0721450747",
        "most_conspicuous_landmark": "Isiolo county Government Offices",
        "distance_from_landmark": "5 Metres"
    }, {
        "county": "Isiolo",
        "constituency": "Isiolo South",
        "office_location": "Garbatulla Town, Next To Kenya Red Cross Office And Police Station",
        "contact": "0715444126",
        "most_conspicuous_landmark": "Kenya Red Cross Office And Police Station",
        "distance_from_landmark": "10 Metres & 1km Respectively"
    }],
    "Meru": [{
        "county": "Meru",
        "constituency": "Igembe South",
        "office_location": "Maua Dc’s Compound",
        "contact": "0722814240",
        "most_conspicuous_landmark": "Maua Police Station",
        "distance_from_landmark": "300 Meters"
    }, {
        "county": "Meru",
        "constituency": "Igembe Central",
        "office_location": "Kangeta Do’s Compound",
        "contact": "0715635177",
        "most_conspicuous_landmark": "Kangeta Multi-Purpose Hall",
        "distance_from_landmark": "5 Meters"
    }, {
        "county": "Meru",
        "constituency": "Igembe North",
        "office_location": "Laare Market",
        "contact": "0710634298",
        "most_conspicuous_landmark": "Laare Equity Bank",
        "distance_from_landmark": "75 Meters"
    }, {
        "county": "Meru",
        "constituency": "Tigania West",
        "office_location": "Kianjai Market",
        "contact": "0721424283",
        "most_conspicuous_landmark": "National Bank",
        "distance_from_landmark": "30 Meters"
    }, {
        "county": "Meru",
        "constituency": "Tigania East",
        "office_location": "Muriri Market- Cm Plaza",
        "contact": "0721702972",
        "most_conspicuous_landmark": "Dc’s Compound",
        "distance_from_landmark": "200 Meters"
    }, {
        "county": "Meru",
        "constituency": "North Imenti",
        "office_location": "Milimani – county Commissioner Residence Road Off Farm Concern Junction To Mesburn Institute",
        "contact": "0728 124 799",
        "most_conspicuous_landmark": "Mesburn Institute",
        "distance_from_landmark": "250 Meters"
    }, {
        "county": "Meru",
        "constituency": "Buuri",
        "office_location": "Timau Market",
        "contact": "0722 602 785",
        "most_conspicuous_landmark": "Siraji Savings And Credit Co-Operative Society Ltd",
        "distance_from_landmark": "Next To Siraji Savings And Credit Co- Operative Society Ltd"
    }, {
        "county": "Meru",
        "constituency": "Central Imenti",
        "office_location": "Gatimbi Market",
        "contact": "0716 739 321",
        "most_conspicuous_landmark": "Gatimbi Dc’s Compound",
        "distance_from_landmark": "200 Meters"
    }, {
        "county": "Meru",
        "constituency": "South Imenti",
        "office_location": "Nkubu Market – Majani Plaza",
        "contact": "0727 239 281",
        "most_conspicuous_landmark": "Majani Plaza",
        "distance_from_landmark": "Within Majani Plaza"
    }],
    "TharakaNithi": [{
        "county": "TharakaNithi",
        "constituency": "Maara",
        "office_location": "Maara Dc’s Compound",
        "contact": "0721 385 088",
        "most_conspicuous_landmark": "Dc’s Office",
        "distance_from_landmark": "300 Meters"
    }, {
        "county": "TharakaNithi",
        "constituency": "Chuka / Igambang’ombe",
        "office_location": "Chuka – Tharaka Nithi county Government Compound",
        "contact": "0721 278 637",
        "most_conspicuous_landmark": "Tharaka Nithi Teachers Sacco",
        "distance_from_landmark": "200 Meters"
    }, {
        "county": "TharakaNithi",
        "constituency": "Tharaka",
        "office_location": "Marimanti Dc’s Compound",
        "contact": "0722 318 211",
        "most_conspicuous_landmark": "Dc’s Office",
        "distance_from_landmark": "100 Meters"
    }],
    "Embu": [{
        "county": "Embu",
        "constituency": "Manyatta",
        "office_location": "Embu Town – Along Embu – Meru Highway",
        "contact": "0722 854 853",
        "most_conspicuous_landmark": "Ack Cathedral Church",
        "distance_from_landmark": "25 Meters"
    }, {
        "county": "Embu",
        "constituency": "Runyenjes",
        "office_location": "Runyenjes Along Embu – Meru Highway",
        "contact": "0714 130301",
        "most_conspicuous_landmark": "Deputy county Commissioner’s Office",
        "distance_from_landmark": "200 Meters"
    }, {
        "county": "Embu",
        "constituency": "Mbeere South",
        "office_location": "Kavondori Area Along Embu – Kiritiri Road",
        "contact": "0722 697917",
        "most_conspicuous_landmark": "Kiritiri District Hospital",
        "distance_from_landmark": "300 Meters"
    }, {
        "county": "Embu",
        "constituency": "Mbeere North",
        "office_location": "Siakago Dc’s Compound",
        "contact": "0725 368937",
        "most_conspicuous_landmark": "Dc’s Office",
        "distance_from_landmark": "10 Meters"
    }],
    "Kitui": [{
        "county": "Kitui",
        "constituency": "Mwingi North",
        "office_location": "Kyuso Market Next To Mwingi North Cdf Office",
        "contact": "0722 76780",
        "most_conspicuous_landmark": "Mwingi North Cdf Office",
        "distance_from_landmark": "50metres"
    }, {
        "county": "Kitui",
        "constituency": "Mwingi West",
        "office_location": "Migwani Behind Catholic Church",
        "contact": "0722 665650",
        "most_conspicuous_landmark": "Catholic Church",
        "distance_from_landmark": "300metres"
    }, {
        "county": "Kitui",
        "constituency": "Mwingi Central",
        "office_location": "Along Tseikuru Road Opposite National Cereals & Produce Board – Mwingi Depot",
        "contact": "0722 507148",
        "most_conspicuous_landmark": "Ncpb – Mwingi Depot",
        "distance_from_landmark": "300metres"
    }, {
        "county": "Kitui",
        "constituency": "Kitui West",
        "office_location": "Matinyani Market Maendeleo Hall",
        "contact": "0724 399 789",
        "most_conspicuous_landmark": "Matinyani Market Centre",
        "distance_from_landmark": "100metres"
    }, {
        "county": "Kitui",
        "constituency": "Kitui Rural",
        "office_location": "Esther House – Kwa Vonza Market Along Kitui – Machakos Road",
        "contact": "0721 563 696",
        "most_conspicuous_landmark": "Kwa Vonza Market Bus Stop",
        "distance_from_landmark": "50metres"
    }, {
        "county": "Kitui",
        "constituency": "Kitui Central",
        "office_location": "Kitui Town Along Hospital Road Opposite Kafoca Hotel And Kitui Law Courts",
        "contact": "0721 563 696",
        "most_conspicuous_landmark": "Kafoca Hotel & Kitui Law Courts",
        "distance_from_landmark": "500metres"
    }, {
        "county": "Kitui",
        "constituency": "Kitui East",
        "office_location": "Nzambani District Hqs.",
        "contact": "0724838355",
        "most_conspicuous_landmark": "Deputy county Commissioner’s Office",
        "distance_from_landmark": "Same Compound"
    }, {
        "county": "Kitui",
        "constituency": "Kitui South",
        "office_location": "Ikutha Town",
        "contact": "0721591972",
        "most_conspicuous_landmark": "Deputy county Commissioner’s Office",
        "distance_from_landmark": "Same Compound"
    }],
    "Machakos": [{
        "county": "Machakos",
        "constituency": "Masinga",
        "office_location": "Masinga Market",
        "contact": "0722912583",
        "most_conspicuous_landmark": "Masinga Police Station",
        "distance_from_landmark": "200metres"
    }, {
        "county": "Machakos",
        "constituency": "Yatta",
        "office_location": "Yatta District Hqs - Kithimani",
        "contact": "0722674352",
        "most_conspicuous_landmark": "Masii – Kithimani Junction",
        "distance_from_landmark": "500metres"
    }, {
        "county": "Machakos",
        "constituency": "Kangundo",
        "office_location": "Ministry Of Public Works Next Kangundo Probation Office",
        "contact": "0726100736",
        "most_conspicuous_landmark": "Kangundo Dc’s Office",
        "distance_from_landmark": "500metres"
    }, {
        "county": "Machakos",
        "constituency": "Matungulu",
        "office_location": "Tala Market Opposite East Mart Supermarket",
        "contact": "0723172949",
        "most_conspicuous_landmark": "East Mart Supermarket",
        "distance_from_landmark": "5metres"
    }, {
        "county": "Machakos",
        "constituency": "Kathiani",
        "office_location": "Dc’s Office",
        "contact": "0722213755",
        "most_conspicuous_landmark": "Dc’s Office",
        "distance_from_landmark": "Same Compound"
    }, {
        "county": "Machakos",
        "constituency": "Mavoko",
        "office_location": "Athi River Town Hippo Dam House – First Floor Opposite Athi River Market",
        "contact": "0701 141 691",
        "most_conspicuous_landmark": "Athi River Market",
        "distance_from_landmark": "100metres"
    }, {
        "county": "Machakos",
        "constituency": "Machakos Town",
        "office_location": "Along Machakos Teachers College Road",
        "contact": "0721 655 944",
        "most_conspicuous_landmark": "Machakos Teachers College",
        "distance_from_landmark": "50metres"
    }, {
        "county": "Machakos",
        "constituency": "Mwala",
        "office_location": "Makutano Ya Mwala Shopping Centre Adjacent To Makutano Police Patrol Base",
        "contact": "0722 819 026",
        "most_conspicuous_landmark": "Makutano Police Patrol Base",
        "distance_from_landmark": "5metres"
    }],
    "Makueni": [{
        "county": "Makueni",
        "constituency": "Mbooni",
        "office_location": "Tawa Social Hall",
        "contact": "0722 900 921",
        "most_conspicuous_landmark": "Tawa Police Post",
        "distance_from_landmark": "20metres"
    }, {
        "county": "Makueni",
        "constituency": "Kilome",
        "office_location": "Salama Town (Nzai House) Along Mombasa Road",
        "contact": "0722 868 479",
        "most_conspicuous_landmark": "Salama Police Station",
        "distance_from_landmark": "100metres"
    }, {
        "county": "Makueni",
        "constituency": "Kaiti",
        "office_location": "Mukuyuni Market Along Machakos – Wote Road",
        "contact": "0725 341 344",
        "most_conspicuous_landmark": "Mukuyuni Patrol Base",
        "distance_from_landmark": "100metres"
    }, {
        "county": "Makueni",
        "constituency": "Makueni",
        "office_location": "Opposite Makueni Hospital",
        "contact": "0722 471 905",
        "most_conspicuous_landmark": "Makueni Hospital",
        "distance_from_landmark": "100metres"
    }, {
        "county": "Makueni",
        "constituency": "Kibwezi West",
        "office_location": "Makindu Town (Lower Market)",
        "contact": "0720 734 889",
        "most_conspicuous_landmark": "Makindu Secondary School",
        "distance_from_landmark": "1km"
    }, {
        "county": "Makueni",
        "constituency": "Kibwezi East",
        "office_location": "Kambu Town Between Mtito Andei And Machinery",
        "contact": "0722 680 004",
        "most_conspicuous_landmark": "Baobab Tree",
        "distance_from_landmark": "500metres"
    }],
    "Nyandarua": [{
        "county": "Nyandarua",
        "constituency": "Kinangop",
        "office_location": "Njabini",
        "contact": "Bernard Chienga 0722471145",
        "most_conspicuous_landmark": "Total Petrol Station",
        "distance_from_landmark": "200m Towards Dc’s Office"
    }, {
        "county": "Nyandarua",
        "constituency": "Kipipiri",
        "office_location": "Miharati Town",
        "contact": "Acenia Njoroge 0721567357",
        "most_conspicuous_landmark": "Dc’s Office",
        "distance_from_landmark": "30 Meters"
    }, {
        "county": "Nyandarua",
        "constituency": "Ol Kalou",
        "office_location": "Within The county Commissioner’s Offices",
        "contact": "Ahmed Musdaf 0722724282",
        "most_conspicuous_landmark": "county Commissioner’s Office",
        "distance_from_landmark": "N/A"
    }, {
        "county": "Nyandarua",
        "constituency": "Ol Jorok",
        "office_location": "Oj Gardens, Ol Jorok",
        "contact": "Agnes Marete 0722241738",
        "most_conspicuous_landmark": "Oljororok Shopping Centre, Olkalou – Nyahururu Road",
        "distance_from_landmark": "500 Metres"
    }, {
        "county": "Nyandarua",
        "constituency": "Ndaragwa",
        "office_location": "Nyandarua D.C Compound Nyahururu",
        "contact": "Daniel Lekupe 0721802898",
        "most_conspicuous_landmark": "Nyandarua D.C Compound Information Block",
        "distance_from_landmark": "3 Meters"
    }],
    "Nyeri": [{
        "county": "Nyeri",
        "constituency": "Tetu",
        "office_location": "Tetu Sub-county Offices, Compound",
        "contact": "Amosi Nyongesa 0721250767",
        "most_conspicuous_landmark": "Deputy county Commissioners Office, Tetu Sub-county",
        "distance_from_landmark": "200 Meters"
    }, {
        "county": "Nyeri",
        "constituency": "Kieni",
        "office_location": "Kieni East Sub county Offices, Chaka.",
        "contact": "Nicholas Buttuk 0728000565",
        "most_conspicuous_landmark": "Deputy county Commissioners Office, Kieni East",
        "distance_from_landmark": "30 Metres"
    }, {
        "county": "Nyeri",
        "constituency": "Mathira",
        "office_location": "Karatina Town, Linda Plaza 2nd Floor",
        "contact": "Mohamed Aress 0722780584",
        "most_conspicuous_landmark": "Post Bank",
        "distance_from_landmark": "Same Building"
    }, {
        "county": "Nyeri",
        "constituency": "Othaya",
        "office_location": "Kcb Building 3rd Floor Room 17",
        "contact": "James Mbai 0722798178",
        "most_conspicuous_landmark": "Kcb Building",
        "distance_from_landmark": "Withing The Landmark"
    }, {
        "county": "Nyeri",
        "constituency": "Mukurwe-Ini",
        "office_location": "Gathuki-Mundu, Along The Mukurwe-Ini Nyeri Road",
        "contact": "Jeremiah Kerich 0725383851",
        "most_conspicuous_landmark": "Gathuki-Mundu Primary School",
        "distance_from_landmark": "100 Metres"
    }, {
        "county": "Nyeri",
        "constituency": "Nyeri Town",
        "office_location": "Nyeri Central Sub-county Offices Compound",
        "contact": "Christine Njambi (Coc) 0706234555",
        "most_conspicuous_landmark": "Nyeri Central Deputy county Commissioners (Dcc) Office",
        "distance_from_landmark": "30 Meters"
    }],
    "Kirinyaga": [{
        "county": "Kirinyaga",
        "constituency": "Mwea",
        "office_location": "Wang’uru county Council Hall",
        "contact": "Amos Obonyo 0721892243",
        "most_conspicuous_landmark": "Near Wang’uru Police Station",
        "distance_from_landmark": "150"
    }, {
        "county": "Kirinyaga",
        "constituency": "Gichugu",
        "office_location": "Kianyaga Town In Wiseman Building 1st Floor.",
        "contact": "Dennis Omare 0713892969",
        "most_conspicuous_landmark": "Along General Kassim Road Next To General Kassim Stadium-Kianyaga",
        "distance_from_landmark": "20 Metres"
    }, {
        "county": "Kirinyaga",
        "constituency": "Ndia",
        "office_location": "Baricho Town",
        "contact": "Elijah Ombogo 0721676719",
        "most_conspicuous_landmark": "Safaricom Booster",
        "distance_from_landmark": "20 Metres"
    }, {
        "county": "Kirinyaga",
        "constituency": "Kirinyaga Central",
        "office_location": "Former Municipal Council Grounds",
        "contact": "Boru D. Duba - 724160200",
        "most_conspicuous_landmark": "Deputy county Commissioners Office, Kirinyaga Central",
        "distance_from_landmark": "50 Meters"
    }],
    "Murang'a": [{
        "county": "Murang'a",
        "constituency": "Kangema",
        "office_location": "Kangema Town",
        "contact": "0720498484",
        "most_conspicuous_landmark": "Police Station",
        "distance_from_landmark": "50m Opposite Police Station"
    }, {
        "county": "Murang'a",
        "constituency": "Mathioya",
        "office_location": "Kiria-Ini",
        "contact": "0719415464",
        "most_conspicuous_landmark": "Equity Bank Kiriaini",
        "distance_from_landmark": "Murata Sacco Building 3rd Floor Room 204 ,Opposite Equity Kiriaini"
    }, {
        "county": "Murang'a",
        "constituency": "Kiharu",
        "office_location": "Murang'a Town",
        "contact": "0724355897",
        "most_conspicuous_landmark": "county Commissioners Offeces",
        "distance_from_landmark": "Ground Floor Room 15 county Commissioners Officec"
    }, {
        "county": "Murang'a",
        "constituency": "Kigumo",
        "office_location": "Kangari",
        "contact": "0721435320",
        "most_conspicuous_landmark": "Wanyaithaje Building Kangari",
        "distance_from_landmark": "Wanyaithaje Building Kangari"
    }, {
        "county": "Murang'a",
        "constituency": "Maragua",
        "office_location": "Makuyu",
        "contact": "0722671716",
        "most_conspicuous_landmark": "World Vision Block",
        "distance_from_landmark": "World Vision Block Next To Do's Office"
    }, {
        "county": "Murang'a",
        "constituency": "Kandara",
        "office_location": "Kandara",
        "contact": "0722780812",
        "most_conspicuous_landmark": "Hurukai House Above Murata Sacco",
        "distance_from_landmark": "Hurukai House Above Murata Sacco Located Opposite Burugu Modern Butchery "
    }, {
        "county": "Murang'a",
        "constituency": "Gatanga",
        "office_location": "Kirwara",
        "contact": "0722897862",
        "most_conspicuous_landmark": "Police Station",
        "distance_from_landmark": "Murata Sacco Building 50m Opposite Police Station"
    }],
    "Kiambu": [{
        "county": "Kiambu",
        "constituency": "Gatundu South",
        "office_location": "Gatundu",
        "contact": "0711520005",
        "most_conspicuous_landmark": "East View Building Ground Flr",
        "distance_from_landmark": "East View Building Ground Flr Opposite Knut Offices"
    }, {
        "county": "Kiambu",
        "constituency": "Gatundu North",
        "office_location": "Kamwangi",
        "contact": "0722332216",
        "most_conspicuous_landmark": "Within Gatundu North Dc's Compound",
        "distance_from_landmark": "Within Gatundu North Dc's Compound Next To Kamwangi Market Along Thika Naivasha Road."
    }, {
        "county": "Kiambu",
        "constituency": "Juja",
        "office_location": "Juja",
        "contact": "0715509241",
        "most_conspicuous_landmark": "Senate Hotel",
        "distance_from_landmark": "Menja Vission Plaza Opposite Senate Hotel"
    }, {
        "county": "Kiambu",
        "constituency": "Thika Town",
        "office_location": "Thika Town",
        "contact": "0721171820",
        "most_conspicuous_landmark": "Stadium",
        "distance_from_landmark": "Assistant county Commissioners Offices Opposite Thika Statdium"
    }, {
        "county": "Kiambu",
        "constituency": "Ruiru",
        "office_location": "Ruiru",
        "contact": "0722644454",
        "most_conspicuous_landmark": "Dcs Office",
        "distance_from_landmark": "50m Opposite Dcs Office"
    }, {
        "county": "Kiambu",
        "constituency": "Githunguri",
        "office_location": "Githunguri",
        "contact": "0721759745",
        "most_conspicuous_landmark": "Best West Bldg.",
        "distance_from_landmark": "Best West Building ( Githunguri Kiambaa Road)"
    }, {
        "county": "Kiambu",
        "constituency": "Kiambu",
        "office_location": "Kiambu",
        "contact": "0711320345",
        "most_conspicuous_landmark": "Mapa House",
        "distance_from_landmark": "Mappa House Building 4th Floor"
    }, {
        "county": "Kiambu",
        "constituency": "Kiambaa",
        "office_location": "Karuri",
        "contact": "0721363295",
        "most_conspicuous_landmark": "Karurui Highschool",
        "distance_from_landmark": "county Council Revenue Officesopposite Karuri Highschool"
    }, {
        "county": "Kiambu",
        "constituency": "Kabete",
        "office_location": "Kabete",
        "contact": "0722285893",
        "most_conspicuous_landmark": "Rythms College",
        "distance_from_landmark": "Kabete Shopping Center Gachio Stage Opposite Rythms College"
    }, {
        "county": "Kiambu",
        "constituency": "Kikuyu",
        "office_location": "Kikuyu",
        "contact": "0722694993",
        "most_conspicuous_landmark": "K-Unity House",
        "distance_from_landmark": "K-Unity House 1st Floor"
    }, {
        "county": "Kiambu",
        "constituency": "Limuru",
        "office_location": "Limuru",
        "contact": "0722941537",
        "most_conspicuous_landmark": "Limuru Law Courts",
        "distance_from_landmark": "Within The Ministry Of Public Works, Behind Limuru Law Courts"
    }, {
        "county": "Kiambu",
        "constituency": "Lari",
        "office_location": "Kimende",
        "contact": "0722506049",
        "most_conspicuous_landmark": "K-Unity House",
        "distance_from_landmark": "K-Unity House 1st Floor"
    }],
    "Turkana": [{
        "county": "Turkana",
        "constituency": "Turkana North",
        "office_location": "Dc’s Office Block, Lokitaung. P.O Box 223 Lodwar 30500",
        "contact": "0722866483",
        "most_conspicuous_landmark": "Dc's Office Block",
        "distance_from_landmark": "500 Metres"
    }, {
        "county": "Turkana",
        "constituency": "Turkana West",
        "office_location": "Inside Sub-county Commissioner’s Offices, Kakuma Town P.O Box I Kakuma -30501.",
        "contact": "0723808770",
        "most_conspicuous_landmark": "Sub county Commissioner's Office",
        "distance_from_landmark": "Same Location"
    }, {
        "county": "Turkana",
        "constituency": "Turkana Central",
        "office_location": "District Development Offices, P.O Box 223 –Lodwar Town 30500",
        "contact": "0722983740",
        "most_conspicuous_landmark": "District Development Offices",
        "distance_from_landmark": "Same Building"
    }, {
        "county": "Turkana",
        "constituency": "Loima",
        "office_location": "Logurum At Dc Adminitration Building (Offices ) P.O Box 223 – Lodwar 30500",
        "contact": "0721337971",
        "most_conspicuous_landmark": "Dc Administration Offices",
        "distance_from_landmark": "Same Building"
    }, {
        "county": "Turkana",
        "constituency": "Turkana South",
        "office_location": "D.D.O’s Offices, Lodwar P.O Box 223 Lodwar-30500",
        "contact": "0722939951",
        "most_conspicuous_landmark": "D.D.O's Offices",
        "distance_from_landmark": "Same Building"
    }, {
        "county": "Turkana",
        "constituency": "Turkana East",
        "office_location": "Lokori At Dc’s Offices, P.O Box 223 –Lodwar 30500",
        "contact": "0720438088",
        "most_conspicuous_landmark": "Dc's Office Block",
        "distance_from_landmark": "Same Location"
    }],
    "West Pokot": [{
        "county": "West Pokot",
        "constituency": "Kapenguria",
        "office_location": "Kapenguria Bible College P.O Box 450 Kapenguria-30600",
        "contact": "0727076247",
        "most_conspicuous_landmark": "Kapenguria Bible College",
        "distance_from_landmark": "Same Location"
    }, {
        "county": "West Pokot",
        "constituency": "Sigor",
        "office_location": "Kapenguria Bible College, P.O Box 450 Kapenguria-30600",
        "contact": "0721218650",
        "most_conspicuous_landmark": "Kapenguria Bible College",
        "distance_from_landmark": "Same Location"
    }, {
        "county": "West Pokot",
        "constituency": "Kacheliba",
        "office_location": "Evangelical Lutheran Church Of Kenya Building, Kenya Bible Centre Of Makutano – Kapenguria Road P.O Box 450 Kapenguria - 30600 ",
        "contact ": "723141544 ",
        "most_conspicuous_landmark ": "Evangelical Lutheran Church Of Kenya Building,Kenya Bible Centre Of Makutano ",
        "distance_from_landmark ": "Same Location "
    }, {
        "county": "West Pokot",
        "constituency": "Pokot South",
        "office_location": "Chebareria Town Within Subcounty Offices Behind World Vision- Along Kapenguria- Lodwar Road, P.O Box 450 Kapenguria-30600",
        "contact": "0724050784",
        "most_conspicuous_landmark": "Subcounty Offices Behind World Vision",
        "distance_from_landmark": "Same Location"
    }],
    "Samburu": [{
        "county": "Samburu",
        "constituency": "Samburu West",
        "office_location": "Next To Cdf Office- Samburu West",
        "contact": "0711320345",
        "most_conspicuous_landmark": "Opposite Dcs Office - Samburu",
        "distance_from_landmark": "150 M"
    }, {
        "county": "Samburu",
        "constituency": "Samburu North",
        "office_location": "Near The Dcs Office - Baragoi",
        "contact": "0722366718",
        "most_conspicuous_landmark": "Dcs Office Baragoi",
        "distance_from_landmark": "200m From The Dcs Office"
    }, {
        "county": "Samburu",
        "constituency": "Samburu East",
        "office_location": "Wamba Catholic Mission",
        "contact": "0721681383",
        "most_conspicuous_landmark": "Wamba Catholic Mission -Samburu",
        "distance_from_landmark": "100m From Wamba Catholic"
    }],
    "Trans Nzioa": [{
        "county": "Trans Nzioa",
        "constituency": "Kwanza",
        "office_location": "Kfa (Kenya Farmers Association) Building 2nd Floor, Kitale Town Railway Road. P.O Box 11 Kitale -30200",
        "contact": "0722300836",
        "most_conspicuous_landmark": "National Cereals & Produce Board",
        "distance_from_landmark": "Opposite Ncpd"
    }, {
        "county": "Trans Nzioa",
        "constituency": "Endebess",
        "office_location": "Endebess District Head Quarters (D.D.O Office) Kitale Molim Road Endebess Town, P.O Box 4 Endebess-30201.",
        "contact": "0721862394",
        "most_conspicuous_landmark": "District Head Quarters (D.D.O Office)",
        "distance_from_landmark": "Same Location"
    }, {
        "county": "Trans Nzioa",
        "constituency": "Saboti",
        "office_location": "Maendeleo Ya Wanawake House Next /Adjacent To Trans Nzoia county Assembly Kitale Town .P.O Box 11 Kitale-30200.",
        "contact": "0723998716",
        "most_conspicuous_landmark": "Trans Nzoia county Assembly",
        "distance_from_landmark": "Just Opposite Trans Nzoia C. Assembly"
    }, {
        "county": "Trans Nzioa",
        "constituency": "Kiminini",
        "office_location": "Within Catholic Parish Kiminini Market P.O Box 11 Kitale-30200.Deputy county Commissioner Office, Tranzoia West",
        "contact": "0721333354",
        "most_conspicuous_landmark": "Catholic Parish Kiminini Market",
        "distance_from_landmark": "50 Metres"
    }, {
        "county": "Trans Nzioa",
        "constituency": "Cherangany",
        "office_location": "Cherangany constituency Office Located At Kachibora Centre, Suguta Plaza, P.O Box 11 Kitale 30200",
        "contact": "0700000396",
        "most_conspicuous_landmark": "Kachibora Centre",
        "distance_from_landmark": "300 Metres"
    }],
    "Uasin Gishu": [{
        "county": "Uasin Gishu",
        "constituency": "Soy",
        "office_location": "West Indies, Ndalat Estate, Behind Santrum Hardware, Uganda Road, P.O Box 822-30100 Eldoret",
        "contact": "0735965543",
        "most_conspicuous_landmark": "Ndalat Estate, Behind Santrum Hardware",
        "distance_from_landmark": "Btn 50 - 100 Metres"
    }, {
        "county": "Uasin Gishu",
        "constituency": "Turbo",
        "office_location": "West Indies Behind I.V.C Church,P.O Box 822 Eldoret-30100",
        "contact": "0729029727",
        "most_conspicuous_landmark": "Ivc Church",
        "distance_from_landmark": "100 Metres"
    }, {
        "county": "Uasin Gishu",
        "constituency": "Moiben",
        "office_location": "Operating In Turbo constituency Office Currently",
        "contact": "0722589432",
        "most_conspicuous_landmark": "Ivc Church",
        "distance_from_landmark": "100 Metres"
    }, {
        "county": "Uasin Gishu",
        "constituency": "Ainabkoi",
        "office_location": "Adjacent To Eldoret East District Hqs, Off Kapsoya Road , Kapsoya Estate , P.O Box 822-30100",
        "contact": "0712276096",
        "most_conspicuous_landmark": "Eldoret East District Hqs",
        "distance_from_landmark": "Across The Road (0)"
    }, {
        "county": "Uasin Gishu",
        "constituency": "Kapseret",
        "office_location": "Inside R.C.E.A Ushirika Church Compound, Opposite Hills School- On Eldoret Kisimu Road,P.O Box 822 Eldoret-30100",
        "contact": "0713485587",
        "most_conspicuous_landmark": "R.C.E.A Ushirika Church, Opposite Hills School",
        "distance_from_landmark": "Inside The Church Compound"
    }, {
        "county": "Uasin Gishu",
        "constituency": "Kesses",
        "office_location": "Jamboni Complex Near Ddc’s Office P.O Box 822 Eldoret-30100",
        "contact": "",
        "most_conspicuous_landmark": "Moi Unversity Law School",
        "distance_from_landmark": "1 Km"
    }],
    "Elgeyo Marakwet": [{
        "county": "Elgeyo Marakwet",
        "constituency": "Marakwet East",
        "office_location": "Chesoi Town Centre",
        "contact": "0720172608",
        "most_conspicuous_landmark": "Dc Administration Offices",
        "distance_from_landmark": "Same Location"
    }, {
        "county": "Elgeyo Marakwet",
        "constituency": "Marakwet West",
        "office_location": "Iebc Building Block Kapsowar Town Centre",
        "contact": "0722495839",
        "most_conspicuous_landmark": "Kapsowar Dc Headquarters",
        "distance_from_landmark": "200 Metres"
    }, {
        "county": "Elgeyo Marakwet",
        "constituency": "Keiyo North",
        "office_location": "Iebc Building Block Iten Town Opposite Elgeyo Marakwet county Hall P.O Box 822 Eldoret-30100",
        "contact": "0722457287",
        "most_conspicuous_landmark": "county Commissioners Building",
        "distance_from_landmark": "50 Metres"
    }, {
        "county": "Elgeyo Marakwet",
        "constituency": "Keiyo South",
        "office_location": "Keiyo Teacher’s Sacco Building Along Kipkwen Road Chepkorio P.O Box 822 Eldoret -30100",
        "contact": "0722789002",
        "most_conspicuous_landmark": "Keiyo Teacher’s Sacco Building",
        "distance_from_landmark": "Inside The Building"
    }],
    "Nandi": [{
        "county": "Nandi",
        "constituency": "Tinderet",
        "office_location": "St Mary’s Tachasis Girl’s, Within Maraba In Tinderet.P.O Box 41 Nandihills 30301",
        "contact": "0721379382",
        "most_conspicuous_landmark": "St Mary’s Tachasis Girl’s, Within Maraba",
        "distance_from_landmark": "Within The School Compound"
    }, {
        "county": "Nandi",
        "constituency": "Aldai",
        "office_location": "St Paul’s Catholic Church, Within Kobujoi Town. Kobujoi P.O Box 44",
        "contact": "0714522078",
        "most_conspicuous_landmark": "St Paul’s Catholic Church",
        "distance_from_landmark": "Inside The Church Compound"
    }, {
        "county": "Nandi",
        "constituency": "Nandi Hills",
        "office_location": "Nandi Hills Town, Ministry Of Public Works P.O Box 41 Nandihills 30301",
        "contact": "0721761414",
        "most_conspicuous_landmark": "Nandills Police Station",
        "distance_from_landmark": "1 Km"
    }, {
        "county": "Nandi",
        "constituency": "Chesumei",
        "office_location": "Chesumei constituency, P.O Box 1121 – 30300 Kapsabet. Cheptarit Catholic Church Mosoriot Centre",
        "contact": "0722504204",
        "most_conspicuous_landmark": "Cheptarit Catholic Church",
        "distance_from_landmark": "Same Location"
    }, {
        "county": "Nandi",
        "constituency": "Emgwen",
        "office_location": "Ministry Of Co-Operative Building –Opposite Kapsabet Boys Secondary School P.O Box 1121 -30300 Kapsabet",
        "contact": "0721352523",
        "most_conspicuous_landmark": "Kapsabet Boys Secondary School",
        "distance_from_landmark": "Opposite The School"
    }, {
        "county": "Nandi",
        "constituency": "Mosop",
        "office_location": "Kabiyet –Nandi North District Head Quarters P.O Box 1121 -30300 Kapsabet",
        "contact": "0720239193",
        "most_conspicuous_landmark": "Kabiyet –Nandi North District Headquarters",
        "distance_from_landmark": "Same Compound"
    }],
    "Baringo": [{
        "county": "Baringo",
        "constituency": "Tiaty",
        "office_location": "Next To Ministry Of Education Offices- Chemolingot",
        "contact": "0721245563",
        "most_conspicuous_landmark": "Chemolingot",
        "distance_from_landmark": ""
    }, {
        "county": "Baringo",
        "constituency": "Baringo North",
        "office_location": "Behind Posta Building",
        "contact": "0733699780",
        "most_conspicuous_landmark": "Posta Building –Baringo North",
        "distance_from_landmark": "19 Km From Kabarnet Town"
    }, {
        "county": "Baringo",
        "constituency": "Baringo Central",
        "office_location": "county Commissioners Premises, Opposite Posta Building _ Kabarnet",
        "contact": "0724344058",
        "most_conspicuous_landmark": "county Commissioners Premises- Kabarnet",
        "distance_from_landmark": "100m"
    }, {
        "county": "Baringo",
        "constituency": "Baringo South",
        "office_location": "Deputy county Commissioner’s Compound",
        "contact": "0722255700",
        "most_conspicuous_landmark": "District Hq Marigat - Kabarnet",
        "distance_from_landmark": "200m From Telcom Kenya Satellite Booster"
    }, {
        "county": "Baringo",
        "constituency": "Mogotio",
        "office_location": "Behind Boresha Sacco",
        "contact": "0722426527",
        "most_conspicuous_landmark": "Boresha Sacco- Mogotio Township",
        "distance_from_landmark": "70m From The Tarmack"
    }, {
        "county": "Baringo",
        "constituency": "Eldama Ravine",
        "office_location": "Sub county Commissioner’s Compound – Eldamaravine",
        "contact": "0723346646",
        "most_conspicuous_landmark": "Law Courts – Eldama Ravine",
        "distance_from_landmark": "-"
    }],
    "Laikipia": [{
        "county": "Laikipia",
        "constituency": "Laikipia West",
        "office_location": "Telkom Building- Nyahuru Town",
        "contact": "0716774555",
        "most_conspicuous_landmark": "Nyahururu Law Court.",
        "distance_from_landmark": "100 M"
    }, {
        "county": "Laikipia",
        "constituency": "Laikipia East",
        "office_location": "Dc’s Compound – Nanyuki Town",
        "contact": "0721295074",
        "most_conspicuous_landmark": "Dc’s Office – Nanyuki Town",
        "distance_from_landmark": "100m"
    }, {
        "county": "Laikipia",
        "constituency": "Laikipia North",
        "office_location": "county Council Building",
        "contact": "0721518171",
        "most_conspicuous_landmark": "Dol Dol- Laikipia North",
        "distance_from_landmark": "-"
    }],
    "Nakuru": [{
        "county": "Nakuru",
        "constituency": "Molo",
        "office_location": "Dc’s Compound - Molo",
        "contact": "0722452071",
        "most_conspicuous_landmark": "Dc’s Office – Molo Town",
        "distance_from_landmark": "200m From Matatu Terminus"
    }, {
        "county": "Nakuru",
        "constituency": "Njoro",
        "office_location": "Aic Church – Compound -Njoro",
        "contact": "0723633631",
        "most_conspicuous_landmark": "Aic Church - Njoro",
        "distance_from_landmark": "100 M"
    }, {
        "county": "Nakuru",
        "constituency": "Naivasha",
        "office_location": "Opposite Dc’s Road Naivasha",
        "contact": "0716454014",
        "most_conspicuous_landmark": "Ack Church - Naivasha",
        "distance_from_landmark": "150m"
    }, {
        "county": "Nakuru",
        "constituency": "Gilgil",
        "office_location": "Hennsolex Building- Ground Floor- Gilgil Town",
        "contact": "0722603846",
        "most_conspicuous_landmark": "Kplc - Gilgil",
        "distance_from_landmark": "50m"
    }, {
        "county": "Nakuru",
        "constituency": "Kuresoi South",
        "office_location": "Keringet Centre- Rest House",
        "contact": "0718892561",
        "most_conspicuous_landmark": "Keringet Office Centre, On The Junction To Dcs",
        "distance_from_landmark": "200m"
    }, {
        "county": "Nakuru",
        "constituency": "Kuresoi North",
        "office_location": "Sachora, Sirikwa Police Post Building- Kuresoi",
        "contact": "0722970659",
        "most_conspicuous_landmark": "Sachora , Sirikwa Police Post.",
        "distance_from_landmark": "200m"
    }, {
        "county": "Nakuru",
        "constituency": "Subukia",
        "office_location": "Mwanainchi Sacco Building – Subukia Town Centre",
        "contact": "0720409802",
        "most_conspicuous_landmark": "Mwanainchi Sacco Building- Subukia",
        "distance_from_landmark": "100m"
    }, {
        "county": "Nakuru",
        "constituency": "Rongai",
        "office_location": "Farming System Building In Kiamunyi.",
        "contact": "0729348796",
        "most_conspicuous_landmark": "Ollive Inn (Kiamunyi).",
        "distance_from_landmark": "100m"
    }, {
        "county": "Nakuru",
        "constituency": "Bahati",
        "office_location": "Do’s Compound – Kiamaina / Maili Sita - Bahati",
        "contact": "0724585675",
        "most_conspicuous_landmark": "Do’s Office Kiamaina / Maili Sita - Bahati",
        "distance_from_landmark": "100 M"
    }, {
        "county": "Nakuru",
        "constituency": "Nakuru Town West",
        "office_location": "District Public Works Opposite Kfa Round About.",
        "contact": "0717562276",
        "most_conspicuous_landmark": "Kfa Roundabout – Nakuru Town",
        "distance_from_landmark": "200m"
    }, {
        "county": "Nakuru",
        "constituency": "Nakuru Town East",
        "office_location": "Catholic Diocese Nakuru (Cdn) Compound – Nakuru",
        "contact": "0722453222",
        "most_conspicuous_landmark": "St Xaviers Primary School.",
        "distance_from_landmark": "100m"
    }],
    "Narok": [{
        "county": "Narok",
        "constituency": "Kilgoris",
        "office_location": "Kilgoris county Offices Behind Jipa Petrol Station",
        "contact": "0729499598",
        "most_conspicuous_landmark": "Jipa Petrol Station",
        "distance_from_landmark": "50 Metres"
    }, {
        "county": "Narok",
        "constituency": "Emurua Dikirr",
        "office_location": "Emurua Dikirr (Dc’s Office)",
        "contact": "0721598828/0752727421",
        "most_conspicuous_landmark": "Dc's Office",
        "distance_from_landmark": "Same Building"
    }, {
        "county": "Narok",
        "constituency": "Narok North",
        "office_location": "Narok Town Next To county Commisioner’soffice",
        "contact": "0703928741",
        "most_conspicuous_landmark": "county Comm Office Narok",
        "distance_from_landmark": "100 Metres"
    }, {
        "county": "Narok",
        "constituency": "Narok East",
        "office_location": "Ntulele Township(Opposite Ntulele Police Station)",
        "contact": "0721987501",
        "most_conspicuous_landmark": "Police Station",
        "distance_from_landmark": "100 Metres"
    }, {
        "county": "Narok",
        "constituency": "Narok South",
        "office_location": "(Next To Olololunga District Hospital)",
        "contact": "0722375539",
        "most_conspicuous_landmark": "District Hospital",
        "distance_from_landmark": "20 Metres"
    }, {
        "county": "Narok",
        "constituency": "Narok West",
        "office_location": "Nkorkorri Boys Sec. School",
        "contact": "0702321325",
        "most_conspicuous_landmark": "Nkorkorri Boys Sec. School",
        "distance_from_landmark": "Same Location"
    }],
    "Kajiado": [{
        "county": "Kajiado",
        "constituency": "Kajiado North",
        "office_location": "D.C's Office-Ngong",
        "contact": "0720756536",
        "most_conspicuous_landmark": "D.C's Office-Ngong",
        "distance_from_landmark": "0 Km"
    }, {
        "county": "Kajiado",
        "constituency": "Kajiado Central",
        "office_location": "Ack Church -Kajiado",
        "contact": "0723698430",
        "most_conspicuous_landmark": "Ack Church -Kajiado Town",
        "distance_from_landmark": "0 Km"
    }, {
        "county": "Kajiado",
        "constituency": "Kajiado East",
        "office_location": "Masaai Rural Training Centre-Isinya",
        "contact": "0720015755",
        "most_conspicuous_landmark": "Masaai Rural Training Centre-Isinya",
        "distance_from_landmark": "0 Km"
    }, {
        "county": "Kajiado",
        "constituency": "Kajiado West",
        "office_location": "St Mary's Catholic Church - Kiserian",
        "contact": "0722355773",
        "most_conspicuous_landmark": "St Mary's Catholic Church - Kiserian",
        "distance_from_landmark": "0 Km"
    }, {
        "county": "Kajiado",
        "constituency": "Kajiado South",
        "office_location": "Ddo's Office - Loitoktok",
        "contact": "0720804285",
        "most_conspicuous_landmark": "Ddo's Office - Loitoktok",
        "distance_from_landmark": "0 Km"
    }],
    "Kericho": [{
        "county": "Kericho",
        "constituency": "Kipkelion East",
        "office_location": "Postal Corporation Of Kenya - Kipkelion Town",
        "contact": "0721510176",
        "most_conspicuous_landmark": "Postal Corporation Of Kenya - Kipkelion Town",
        "distance_from_landmark": "Same Building"
    }, {
        "county": "Kericho",
        "constituency": "Kipkelion West",
        "office_location": "Postal Corporation Of Kenya -Londiani Town",
        "contact": "0721462233",
        "most_conspicuous_landmark": "Postal Corporation Of Kenya -Londiani Town",
        "distance_from_landmark": "Same Building"
    }, {
        "county": "Kericho",
        "constituency": "Ainamoi",
        "office_location": "Dc’s Office- Next To Kericho High Court - Kericho Town",
        "contact": "0722228759/0733228759",
        "most_conspicuous_landmark": "Kericho High Court",
        "distance_from_landmark": "50 Metres"
    }, {
        "county": "Kericho",
        "constituency": "Bureti",
        "office_location": "Bureti Growers Sacco Ltd Building -2 nd Floor -Litein Town",
        "contact": "0722344546",
        "most_conspicuous_landmark": "Bureti Growers Sacco Ltd Building",
        "distance_from_landmark": "Same Building"
    }, {
        "county": "Kericho",
        "constituency": "Belgut",
        "office_location": "Sosiot Town Centre- Opposite Dc's Office",
        "contact": "0723642460",
        "most_conspicuous_landmark": "Dc's Office",
        "distance_from_landmark": "100 Metres"
    }, {
        "county": "Kericho",
        "constituency": "Sigowet/Soin",
        "office_location": "Soko Huru Shopping Centre- Along Kericho Kisumu Highway",
        "contact": "0722602059",
        "most_conspicuous_landmark": "Soko Huru Shopping Centre- Along Kericho Kisumu Highway",
        "distance_from_landmark": "100 Metres From Highway"
    }],
    "Bomet": [{
        "county": "Bomet",
        "constituency": "Sotik",
        "office_location": "Postal Corporation Of Kenya- Office- Sotik Next To Kcb Bank Sotik",
        "contact": "0722214635",
        "most_conspicuous_landmark": "Kenya Commercial Bank Sotik",
        "distance_from_landmark": "50 Metres"
    }, {
        "county": "Bomet",
        "constituency": "Chepalungu",
        "office_location": "Kyogong Shopping Centre- Bomet Narok Highway",
        "contact": "0713925622",
        "most_conspicuous_landmark": "Kyogong Shopping Centre- Bomet Narok Highway",
        "distance_from_landmark": "100 Metres From Highway"
    }, {
        "county": "Bomet",
        "constituency": "Bomet East",
        "office_location": "Above Kipsigis Eddis Sacco(Opposite National Cereals Board)- Bomet",
        "contact": "0721668268",
        "most_conspicuous_landmark": "Ncpb Bomet",
        "distance_from_landmark": "20 Metres"
    }, {
        "county": "Bomet",
        "constituency": "Bomet Central",
        "office_location": "National Cereals And Produce Board – Bomet Offices",
        "contact": "0722683887",
        "most_conspicuous_landmark": "Ncpb Bomet",
        "distance_from_landmark": "Same Building"
    }, {
        "county": "Bomet",
        "constituency": "Konoin",
        "office_location": "Mogogosiek Township (Near Dc’s Office)",
        "contact": "0714281985",
        "most_conspicuous_landmark": "Dc's Office",
        "distance_from_landmark": "150 Metres"
    }],
    "Kakamega": [{
        "county": "Kakamega",
        "constituency": "Lugari",
        "office_location": "Lumakada Mrkt,Along Bish Sulmeti G.Sec School",
        "contact": "0721616210",
        "most_conspicuous_landmark": "Opposite Dc’soffices",
        "distance_from_landmark": "150m"
    }, {
        "county": "Kakamega",
        "constituency": "Likuyani",
        "office_location": "Kongoni Pag Church Compound",
        "contact": "0726309509",
        "most_conspicuous_landmark": "Friends Church",
        "distance_from_landmark": "50m"
    }, {
        "county": "Kakamega",
        "constituency": "Malava",
        "office_location": "Within Compound Of Malava Yearly Meeting Of Friends Church",
        "contact": "0722373537",
        "most_conspicuous_landmark": "(Quakers)",
        "distance_from_landmark": "100m"
    }, {
        "county": "Kakamega",
        "constituency": "Lurambi",
        "office_location": "Post Office Kakamega",
        "contact": "0722437294",
        "most_conspicuous_landmark": "Opposite Police Station",
        "distance_from_landmark": "20 M"
    }, {
        "county": "Kakamega",
        "constituency": "Navakholo",
        "office_location": "Mocco Building, Navakholo Centre.",
        "contact": "0723502628",
        "most_conspicuous_landmark": "Cdf Office",
        "distance_from_landmark": "Across The Road"
    }, {
        "county": "Kakamega",
        "constituency": "Mumias West",
        "office_location": "Along Mumias /Musanda Rd",
        "contact": "",
        "most_conspicuous_landmark": "Bomani Playground, Ack Diocese Office Diocese Office",
        "distance_from_landmark": "100m"
    }, {
        "county": "Kakamega",
        "constituency": "Mumias East",
        "office_location": "Rd,Shianda",
        "contact": "0720616723",
        "most_conspicuous_landmark": "Shianda Market",
        "distance_from_landmark": "100m"
    }, {
        "county": "Kakamega",
        "constituency": "Matungu",
        "office_location": "Matungu Mrkt Saka Building",
        "contact": "0729778609",
        "most_conspicuous_landmark": "Opposite Dc’s Office Kholera Rd",
        "distance_from_landmark": "100m"
    }, {
        "county": "Kakamega",
        "constituency": "Butere",
        "office_location": "Butere Town Centre,Tsalwa Building",
        "contact": "0710895646",
        "most_conspicuous_landmark": "Opposite Police Station",
        "distance_from_landmark": "50m"
    }, {
        "county": "Kakamega",
        "constituency": "Khwisero",
        "office_location": "Vision Plaza Central Yearly Meeting Of Friends Church Lirhanda",
        "contact": "0722172443",
        "most_conspicuous_landmark": "Directly Opposite Safari Com Booster",
        "distance_from_landmark": "20m"
    }, {
        "county": "Kakamega",
        "constituency": "Shinyalu",
        "office_location": "Opposite Makhoko Sec Sch",
        "contact": "0723169091",
        "most_conspicuous_landmark": "Shinyalu Market",
        "distance_from_landmark": "1 Km"
    }, {
        "county": "Kakamega",
        "constituency": "Ikolomani",
        "office_location": "",
        "contact": "0722628127",
        "most_conspicuous_landmark": "Sec School",
        "distance_from_landmark": "50m"
    }, {
        "county": "Kakamega",
        "constituency": "",
        "office_location": "Mbale Municipal Council",
        "contact": "0718036034",
        "most_conspicuous_landmark": "Barclays Bank",
        "distance_from_landmark": "200"
    }, {
        "county": "Kakamega",
        "constituency": "Sabatia",
        "office_location": "National Cereals&Produce Board Chavakali Along Kak Mumias Rd Shianda",
        "contact": "0726374029",
        "most_conspicuous_landmark": "Chavakali",
        "distance_from_landmark": "100m"
    }, {
        "county": "Kakamega",
        "constituency": "Hamisi",
        "office_location": "Youth Empowerment Cnter",
        "contact": "0722499800",
        "most_conspicuous_landmark": "Sub countycommissioner’s",
        "distance_from_landmark": "Btw 50m-100m"
    }, {
        "county": "Kakamega",
        "constituency": "Luanda",
        "office_location": "Market,Mocco Offices Ebusiralo Along Ebusakami/Kima Rd",
        "contact": "0720951500/732951500",
        "most_conspicuous_landmark": "Bunyore Girls H School",
        "distance_from_landmark": "1km"
    }, {
        "county": "Kakamega",
        "constituency": "Emuhaya",
        "office_location": "Nxt Esibuye Mrkt, Along Main Road Kima Musutswi",
        "contact": "0722626862",
        "most_conspicuous_landmark": "Emuhaya Market",
        "distance_from_landmark": "400m"
    }],
    "Bungoma": [{
        "county": "Bungoma",
        "constituency": "Mt. Elgon",
        "office_location": "Kapsokwony Market",
        "contact": "0721217569",
        "most_conspicuous_landmark": "Kapsokwiny Town",
        "distance_from_landmark": "0m"
    }, {
        "county": "Bungoma",
        "constituency": "Sirisia",
        "office_location": "Dc’s Cpd",
        "contact": "0724245990",
        "most_conspicuous_landmark": "Dc’s Office",
        "distance_from_landmark": "50m"
    }, {
        "county": "Bungoma",
        "constituency": "Kabuchai",
        "office_location": "Chwele Mkt",
        "contact": "0721519043",
        "most_conspicuous_landmark": "Dc’s Office",
        "distance_from_landmark": "0.5km"
    }, {
        "county": "Bungoma",
        "constituency": "Bumula",
        "office_location": "Dc’s Cpd",
        "contact": "0725782682",
        "most_conspicuous_landmark": "Dc’s Cpd",
        "distance_from_landmark": "100m"
    }, {
        "county": "Bungoma",
        "constituency": "Kanduyi",
        "office_location": "Bungoma Cereals Board Cpd",
        "contact": "0729812994",
        "most_conspicuous_landmark": "Cereals Board Cpd",
        "distance_from_landmark": "0m"
    }, {
        "county": "Bungoma",
        "constituency": "Webuye East",
        "office_location": "Webuye-Kitale Road",
        "contact": "0711517134",
        "most_conspicuous_landmark": "Dc’s Offce",
        "distance_from_landmark": "0.5km"
    }, {
        "county": "Bungoma",
        "constituency": "Webuye West",
        "office_location": "Bokoli",
        "contact": "0720762835",
        "most_conspicuous_landmark": "Bokoli Market",
        "distance_from_landmark": ""
    }, {
        "county": "Bungoma",
        "constituency": "Kimilili",
        "office_location": "Kimilili Town",
        "contact": "0721706723",
        "most_conspicuous_landmark": "Kimilili Town",
        "distance_from_landmark": "0m"
    }, {
        "county": "Bungoma",
        "constituency": "Tongaren",
        "office_location": "Do’s Cpd",
        "contact": "0726427176",
        "most_conspicuous_landmark": "Dos Office",
        "distance_from_landmark": "30m"
    }],
    "Busia": [{
        "county": "Busia",
        "constituency": "Teso North",
        "office_location": "Amagoro Market",
        "contact": "0722501345",
        "most_conspicuous_landmark": "Levantes Hotel",
        "distance_from_landmark": "200m"
    }, {
        "county": "Busia",
        "constituency": "Teso South",
        "office_location": "Dc’s Cpd",
        "contact": "0721605704",
        "most_conspicuous_landmark": "Dc’s Office",
        "distance_from_landmark": "0m"
    }, {
        "county": "Busia",
        "constituency": "Nambale",
        "office_location": "Dc’s Cpd",
        "contact": "0721272725",
        "most_conspicuous_landmark": "New High Court",
        "distance_from_landmark": "50m"
    }, {
        "county": "Busia",
        "constituency": "Matayos",
        "office_location": "Dc’s Cpd",
        "contact": "0722242192",
        "most_conspicuous_landmark": "New High Court",
        "distance_from_landmark": "50m"
    }, {
        "county": "Busia",
        "constituency": "Butula",
        "office_location": "Butula Mkt",
        "contact": "0725959219",
        "most_conspicuous_landmark": "Butula Mkt",
        "distance_from_landmark": "0m"
    }, {
        "county": "Busia",
        "constituency": "Funyula",
        "office_location": "Funyula Mkt",
        "contact": "0721646447",
        "most_conspicuous_landmark": "Post Office",
        "distance_from_landmark": "50m"
    }, {
        "county": "Busia",
        "constituency": "Budalangi",
        "office_location": "Ap Line",
        "contact": "0716311151",
        "most_conspicuous_landmark": "Ap Line",
        "distance_from_landmark": "0m"
    }],
    "Siaya": [{
        "county": "Siaya",
        "constituency": "Ugenya",
        "office_location": "Ukwala",
        "contact": "0721 544 767",
        "most_conspicuous_landmark": "Opposite Ukwalla Town Hall",
        "distance_from_landmark": "100m"
    }, {
        "county": "Siaya",
        "constituency": "Ugunja",
        "office_location": "Ugunja",
        "contact": "0721 752 410",
        "most_conspicuous_landmark": "Ambira District Hospital",
        "distance_from_landmark": "100 Metres"
    }, {
        "county": "Siaya",
        "constituency": "Alego Usonga",
        "office_location": "Siaya Town",
        "contact": "0721 336 801",
        "most_conspicuous_landmark": "Siaya county Commissioner's Premises",
        "distance_from_landmark": "50m"
    }, {
        "county": "Siaya",
        "constituency": "Gem",
        "office_location": "Wagai",
        "contact": "0714 148 910",
        "most_conspicuous_landmark": "Opposite Do's Office Wagai",
        "distance_from_landmark": "10m"
    }, {
        "county": "Siaya",
        "constituency": "Bondo",
        "office_location": "Bondo Town",
        "contact": "0722289377",
        "most_conspicuous_landmark": "county Council",
        "distance_from_landmark": "70 Metres"
    }, {
        "county": "Siaya",
        "constituency": "Rarieda",
        "office_location": "Kalandini",
        "contact": "0721 419 231",
        "most_conspicuous_landmark": "Ministry Of Roads Offices",
        "distance_from_landmark": "0"
    }],
    "Kisumu": [{
        "county": "Kisumu",
        "constituency": "Kisumu East",
        "office_location": "Within The Ministry Of Lands Premises; Next To Kisumu East Dc’s Offices; Kisumu City",
        "contact": "0729 934 824",
        "most_conspicuous_landmark": "Imperial Hotel",
        "distance_from_landmark": "400m"
    }, {
        "county": "Kisumu",
        "constituency": "Kisumu West",
        "office_location": "Maseno",
        "contact": "0734 483 722",
        "most_conspicuous_landmark": "Behind Maseno Law Courts.",
        "distance_from_landmark": "20m"
    }, {
        "county": "Kisumu",
        "constituency": "Kisumu Central",
        "office_location": "Former Pc's Hqs (Governor's Building) Right Wing Ground Floor - Kisumu City",
        "contact": "0722 691 811",
        "most_conspicuous_landmark": "Inside Pc's Hqs/ Opposite Cbk Kisumu",
        "distance_from_landmark": "O Kms"
    }, {
        "county": "Kisumu",
        "constituency": "Seme",
        "office_location": "Kombewa",
        "contact": "0722 426 682",
        "most_conspicuous_landmark": "Kombewa Sub-county Hospital, Sub-county Commissioner’s Office, Walter Wreed/Kemri Offices ",
        "distance_from_landmark ": "100 Metres "
    }, {
        "county": "Kisumu",
        "constituency": "Nyando",
        "office_location": "Awasi/Ahero",
        "contact": "0720 321 420",
        "most_conspicuous_landmark": "Between Ahero Police Station & Multipurpose Training Institute",
        "distance_from_landmark": "50m"
    }, {
        "county": "Kisumu",
        "constituency": "Muhoroni",
        "office_location": "Chemelil",
        "contact": "0722 691 871",
        "most_conspicuous_landmark": "Sugar Belt Union Offices",
        "distance_from_landmark": "0"
    }, {
        "county": "Kisumu",
        "constituency": "Nyakach",
        "office_location": "Pap Onditi",
        "contact": "0721 213 517",
        "most_conspicuous_landmark": "Next To Dc`S Office",
        "distance_from_landmark": "200 Metres"
    }],
    "Homabay": [{
        "county": "Homabay",
        "constituency": "Kasipul",
        "office_location": "Kosele",
        "contact": "0721 590 567",
        "most_conspicuous_landmark": "D.C’s Compound",
        "distance_from_landmark": "100metres"
    }, {
        "county": "Homabay",
        "constituency": "Kabondo Kasipul",
        "office_location": "Ramula",
        "contact": "0720 285 908",
        "most_conspicuous_landmark": "Kadongo Market Centre Within Renish Obunge Building On Your Way To Got Rateng Mixed Secondary Sch.",
        "distance_from_landmark ": "500 m "
    }, {
        "county": "Homabay",
        "constituency": "Karachuonyo",
        "office_location": "Sub county Hqs Kendu Bay",
        "contact": "0722 790 881",
        "most_conspicuous_landmark": "Rachuonyo North District Hqs",
        "distance_from_landmark": "Same Block Room 16"
    }, {
        "county": "Homabay",
        "constituency": "Rangwe",
        "office_location": "Rangwe",
        "contact": "0722 856 270",
        "most_conspicuous_landmark": "Rangwe Dispensary",
        "distance_from_landmark": "100m"
    }, {
        "county": "Homabay",
        "constituency": "Homa Bay Town",
        "office_location": "Homa Bay",
        "contact": "0723 267 679",
        "most_conspicuous_landmark": "county Commissioners Office,county Assemby Hall.Homa Bay Law Courts,All Other Govt Offices.",
        "distance_from_landmark ": "Within The Same Compound."
    }, {
        "county": "Homabay",
        "constituency": "Ndhiwa",
        "office_location": "D/county Commisioner’s Compound Ndhiwa",
        "contact": "0710 335 478",
        "most_conspicuous_landmark": "Deputy county Commisioner’s Office",
        "distance_from_landmark": "50m"
    }, {
        "county": "Homabay",
        "constituency": "Mbita",
        "office_location": "Mbita",
        "contact": "0725 296 561",
        "most_conspicuous_landmark": "Dc’s Compound",
        "distance_from_landmark": "60m"
    }, {
        "county": "Homabay",
        "constituency": "Suba",
        "office_location": "Magunga",
        "contact": "0722 455 080",
        "most_conspicuous_landmark": "Within Magunga Shopping Centre",
        "distance_from_landmark": "0"
    }],
    "Migori": [{
        "county": "Migori",
        "constituency": "Rongo",
        "office_location": "Dc's Compound",
        "contact": "Noah Bowen 0722 466 302",
        "most_conspicuous_landmark": "Rongo Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Migori",
        "constituency": "Awendo",
        "office_location": "Cereal's Board Compound",
        "contact": "Lilian Lilumah 0721 566 430",
        "most_conspicuous_landmark": "Awendo Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Migori",
        "constituency": "Suna East",
        "office_location": "Dc's Compound",
        "contact": "Maurice Raria",
        "most_conspicuous_landmark": "Migori Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Migori",
        "constituency": "Suna West",
        "office_location": "Cereal Board's Compound",
        "contact": "Mathew Chenger",
        "most_conspicuous_landmark": "Migori Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Migori",
        "constituency": "Uriri",
        "office_location": "Opposite Dc's Compound",
        "contact": "Jacktone Nyonje",
        "most_conspicuous_landmark": "Uriri Town",
        "distance_from_landmark": "40 M"
    }, {
        "county": "Migori",
        "constituency": "Nyatike",
        "office_location": "Dc's Compound",
        "contact": "Moses Daula 0727 902 716",
        "most_conspicuous_landmark": "Nyatike Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Migori",
        "constituency": "Kuria West",
        "office_location": "Next To Kehancha Law Court",
        "contact": "Mohammed Aden 0720 565 657",
        "most_conspicuous_landmark": "Kehancha Town",
        "distance_from_landmark": "50 M"
    }, {
        "county": "Migori",
        "constituency": "Kuria East",
        "office_location": "Dc's Compound",
        "contact": "Benson Njau",
        "most_conspicuous_landmark": "Kegonga Town",
        "distance_from_landmark": "Same Copound"
    }],
    "Kisii": [{
        "county": "Kisii",
        "constituency": "Bonchari",
        "office_location": "Ministry Of Public Works",
        "contact": "Peter Resa",
        "most_conspicuous_landmark": "Suneka Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Kisii",
        "constituency": "South Mugirango",
        "office_location": "Next To Dc's Compound",
        "contact": "0722 564 796",
        "most_conspicuous_landmark": "Nyamarambe Town",
        "distance_from_landmark": "100 M"
    }, {
        "county": "Kisii",
        "constituency": "Bomachoge Borabu",
        "office_location": "Opposite Do's Compound",
        "contact": "0711 423 750",
        "most_conspicuous_landmark": "Magena Town",
        "distance_from_landmark": "40 M"
    }, {
        "county": "Kisii",
        "constituency": "Bobasi",
        "office_location": "Dc's Compound",
        "contact": "0722 251 913",
        "most_conspicuous_landmark": "Sameta Market",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Kisii",
        "constituency": "Bomachoge Chache",
        "office_location": "Dc's Compound",
        "contact": "0726 425 551",
        "most_conspicuous_landmark": "Ogembo Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Kisii",
        "constituency": "Nyaribari Masaba",
        "office_location": "Dc's Compound",
        "contact": "0727 281 623",
        "most_conspicuous_landmark": "Masimba Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Kisii",
        "constituency": "Nyaribari Chache",
        "office_location": "Dc's Compound",
        "contact": "0722 153 729",
        "most_conspicuous_landmark": "Keumbu Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Kisii",
        "constituency": "Kitutu Chache North",
        "office_location": "Dc's Compound",
        "contact": "0721 293 662",
        "most_conspicuous_landmark": "Marani Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Kisii",
        "constituency": "Kitutu Chache South",
        "office_location": "Dc's Compound",
        "contact": "0721 576 104",
        "most_conspicuous_landmark": "Kisii Town",
        "distance_from_landmark": "Same Copound"
    }],
    "Nyamira": [{
        "county": "Nyamira",
        "constituency": "Fredrick Odenge",
        "office_location": "Dc's Compound",
        "contact": "0721 592 152",
        "most_conspicuous_landmark": "Manga Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Nyamira",
        "constituency": "Benson Ambuko",
        "office_location": "Dc's Compound",
        "contact": "0723 837 010",
        "most_conspicuous_landmark": "Nyamira Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Nyamira",
        "constituency": "Justus Naliakho",
        "office_location": "Dc's Compound",
        "contact": "0714 400 675",
        "most_conspicuous_landmark": "Nyamira Town",
        "distance_from_landmark": "Same Copound"
    }, {
        "county": "Nyamira",
        "constituency": "Elijah Ngunjiri",
        "office_location": "Dc's Compound",
        "contact": "0721 384 596",
        "most_conspicuous_landmark": "Nyansiongo Town",
        "distance_from_landmark": "Same Copound"
    }],
    "Nairobi City": [{
        "county": "Nairobi City",
        "constituency": "Westlands",
        "office_location": "Ministry Of Social Services -Westlands",
        "contact": "0722768861",
        "most_conspicuous_landmark": "Ministry Of Social Services -Westlands",
        "distance_from_landmark": "0 Km"
    }, {
        "county": "Nairobi City",
        "constituency": "Dagoreti North",
        "office_location": "Maliposa Apartment -Ngong Road",
        "contact": "0716455241",
        "most_conspicuous_landmark": "Nakumart -Junction",
        "distance_from_landmark": "4 Km"
    }, {
        "county": "Nairobi City",
        "constituency": "Dagoretti South",
        "office_location": "Maisha Poa Centre -Kawangware",
        "contact": "0733326084",
        "most_conspicuous_landmark": "Do's Office -Kawangware.",
        "distance_from_landmark": "1km"
    }, {
        "county": "Nairobi City",
        "constituency": "Langata",
        "office_location": "Cdf Offices -Langata",
        "contact": "0722391275",
        "most_conspicuous_landmark": "Cdf Offices -Langata",
        "distance_from_landmark": "0km"
    }, {
        "county": "Nairobi City",
        "constituency": "Kibra",
        "office_location": "D.C's Office Kibera",
        "contact": "0722653748",
        "most_conspicuous_landmark": "D.C's Office Kibera",
        "distance_from_landmark": "0km"
    }, {
        "county": "Nairobi City",
        "constituency": "Roysambu",
        "office_location": "D.O's Office-Kahawa West",
        "contact": "0724802423",
        "most_conspicuous_landmark": "D.O's Office-Kahawa West",
        "distance_from_landmark": "0km"
    }, {
        "county": "Nairobi City",
        "constituency": "Kasarani",
        "office_location": "D.C's Office Kasarani",
        "contact": "0722508828",
        "most_conspicuous_landmark": "D.C's Office Kasarani",
        "distance_from_landmark": "0km"
    }, {
        "county": "Nairobi City",
        "constituency": "Ruaraka",
        "office_location": "Sacred Heart Catholic Church - Baba Dogo",
        "contact": "0711199852",
        "most_conspicuous_landmark": "Sacred Heart Catholic Church - Baba Dogo",
        "distance_from_landmark": "0km"
    }, {
        "county": "Nairobi City",
        "constituency": "Embakasi South",
        "office_location": "Joy Villa-Imara Daima",
        "contact": "0721686407",
        "most_conspicuous_landmark": "Nakumart Embakasi.",
        "distance_from_landmark": "3km"
    }, {
        "county": "Nairobi City",
        "constituency": "Embakasi North",
        "office_location": "D.C's Office -Dandora",
        "contact": "0721313181",
        "most_conspicuous_landmark": "D.O's Office -Dandora",
        "distance_from_landmark": "0 Km"
    }, {
        "county": "Nairobi City",
        "constituency": "Embakasi Central",
        "office_location": "D.C's Office-Kayole",
        "contact": "0733543618",
        "most_conspicuous_landmark": "D.C's Office-Kayole",
        "distance_from_landmark": "0 Km"
    }, {
        "county": "Nairobi City",
        "constituency": "Embakasi East",
        "office_location": "Ea School Of Aviation-Embakasi",
        "contact": "0722752050",
        "most_conspicuous_landmark": "Ea School Of Aviation-Embakasi",
        "distance_from_landmark": "0 Km"
    }, {
        "county": "Nairobi City",
        "constituency": "Embakasi West",
        "office_location": "Tena -Dolhnolm",
        "contact": "0725126173",
        "most_conspicuous_landmark": "Naivas Supermarket - Dolholm",
        "distance_from_landmark": "3 Km"
    }, {
        "county": "Nairobi City",
        "constituency": "Makadara",
        "office_location": "Ministry Of Public Works-Industral Area",
        "contact": "0722841900",
        "most_conspicuous_landmark": "Ministry Of Public Works-Industral Area",
        "distance_from_landmark": "0 Km"
    }, {
        "county": "Nairobi City",
        "constituency": "Kamukunji",
        "office_location": "D.C's Office-Kamukunji",
        "contact": "0720935328",
        "most_conspicuous_landmark": "D.C's Office-Kamukunji",
        "distance_from_landmark": "0 Km"
    }, {
        "county": "Nairobi City",
        "constituency": "Starehe",
        "office_location": "Kie-Ngara",
        "contact": "0722276410",
        "most_conspicuous_landmark": "Kie-Ngara",
        "distance_from_landmark": "0 Km"
    }, {
        "county": "Nairobi City",
        "constituency": "Mathare",
        "office_location": "Chief's Camp-Mathare",
        "contact": "0733543618",
        "most_conspicuous_landmark": "Chief's Camp-Mathare",
        "distance_from_landmark": "0 Km"
    }]
}

str = '<option value="">Select county</option>', arr = [] // Store counties for sorting before displaying
for (x in DATA) {
    arr.push(x)
}
D = arr.sort()
for (x in D) {
    str += '<option value="'+ D[x] +'">'+ D[x] +'</option>'
}
$('.county').html(str)

$('.county').change(function() {
    D = DATA[$('.county').val()]
    str = '', arr = [] // Store constituencies for sorting before displaying
    for (y in D) {
        arr.push(D[y]['constituency'])
    }
    D = arr.sort()
    for (x in D) {
        str += '<option value="'+ D[x] +'">'+ D[x] +'</option>'
    }
    $('.constituency').html(str)
    $('.constituency').change()
})
$('.constituency').change(function() {
    for (y in DATA[$('.county').val()]) {
        repo = DATA[$('.county').val()][y]
        c = repo['constituency']
        if ( c == $('.constituency').val()) {
            markup = "<div class='box'>"
            markup += '<p class="lead">' + repo['office_location'] + "</p>"
            markup += "<p>"
            if (repo['distance_from_landmark'])  markup += repo['distance_from_landmark'] + " from "
            if (repo['most_conspicuous_landmark']) markup += repo['most_conspicuous_landmark']
            markup += "</p>"
            markup += '<hr style="margin:10px 0px;">'
            if (repo['contact']) markup += '<p><i class="fa fa-phone"></i> ' + repo['contact'] + "</p>"
            markup += "</div>"
            $('#results-box').html(markup)
        }
    }
});
$('#embed-link').click(function() {
    $('#embed-section').removeClass('hide')
})
$('#embed-link-2').click(function() {
    $('#embed-section-2').removeClass('hide')
})

$('#shared-id-name').keypress(function (e) {
    if (e.which == 13) {
        $('#shared-id-name').click()
        return false
    }
});
$('#shared-id-name').click(function() {
    search_shared_ids($(this).val())
});
function search_shared_ids(query) {
    if (query == '') { return }
    url = 'https://f2vuss2i8c.execute-api.eu-west-1.amazonaws.com/prod?q=' + query
     $.ajax({
        method: "GET",
        url: url,
        success: (function( data ) {
            list = data.hits.hit
            html = ''
            if (list.length == 0) {
                html += "<p class='text-center'>Your name, <b>"+ to_title_case(query) +"</b>, does not appear on this list. </p>"
                html += "<hr>"
            } else {
                for (var i = 0; i < list.length; i++) {
                    d = list[i].fields
                    html += "<div class='box'>"
                    html += "<p class='lead'>"+ to_title_case(d.full_name) +"</p>"
                    html += "<p>County: "+ to_title_case(d.county_name) +"</p>"
                    html += "<p>Constituency: "+ to_title_case(d.constituency) +"</p>"
                    html += "<p> Ward: "+ to_title_case(d.caw) +"</p>"
                    html += "<p>Polling Station: "+ to_title_case(d.polling_station) +"</p>"
                    html += "</div>"
                }
            }
            $('#id-results-box').html(html)
        })
    })
}

function to_title_case(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})
}