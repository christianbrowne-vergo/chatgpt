$(function () {

  let key = '';
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "key.txt", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      key = xhr.responseText;
    }
  };
  xhr.send();
  console.log(key)


  // wow animate input


  $("input").click(function () {
    $(this).addClass("wow pulse animated");
    $(this).attr("style", "visibility: visible; animation-name: pulse ;");
    $(this).data("data-wow-iteration", 52)
  });
  // wow animate input


  // addMore

  $('#addMore').click(function () {

    addMore();

    if (a > 1) {
      $("#remove").show();
    }

    if (a > 2) {
      $('#addMore').hide();
    }

  })
  // addMore

  // remove Add
  $("#remove").click(function () {
    remove();

    if (a <= 1) {
      $("#remove").hide();
    }

    if (a < 3) {
      $('#addMore').show();
    }

  });
  // remove Add


  // addMoreJob

  $('#addMoreJob').click(function () {

    addMore();

    if (d > 1) {
      $("#removeJob").show();
    }

  })
  // addMore Job

  // remove Add Job
  $("#remove1").click(function () {
    remove();

    if (d <= 1) {
      $("#remove1").hide();
    }

    if (d < 1) {
      $('#addMoreJob').show();
    }

  });
  // remove Add Job


  // addMoreJob

  $('#addMoreStyle').click(function () {

    addMore();

    if (f > 1) {
      $("#removeStyle").show();
    }

  })
  // addMore Job

  // remove Add Job
  $("#remove2").click(function () {
    remove();

    if (f <= 1) {
      $("#remove2").hide();
    }

    if (f < 1) {
      $('#addMoreStyle').show();
    }

  });
  // remove Add Job

   // addMoreJob

   $('#addMoreEv').click(function () {

    addMore();

    if (h > 1) {
      $("#removeEv").show();
    }

  })
  // addMore Job

  // remove Add Job
  $("#remove3").click(function () {
    remove();

    if (h <= 1) {
      $("#remove3").hide();
    }

    if (h < 1) {
      $('#addMoreEv').show();
    }

  });
  // remove Add Job



  // addMore Work
  $('#addWork').click(function () {

    addMoreWork();

    if (b > 1) {
      $("#removeWork").show();
    }

    if (b > 3) {
      $('#addWork').hide();
    }
  })
  // addMore Work



  // remove Work
  $("#removeWork").click(function () {

    removeWork();
    if (b <= 1) {
      $("#removeWork").hide();
    }

    if (b < 4) {
      $('#addWork').show();
    }
  });
  // remove Work


  // addMore Work
  $('#addJob').click(function () {

    addMoreJob();

    if (c > 1) {
      $("#removeJob").show();
    }

    if (c > 1) {
      $('#addJob').hide();
    }
  })
  // addMore Work



  // remove Work
  $("#removeJob").click(function () {

    removeJob();
    if (c <= 1) {
      $("#removeJob").hide();
    }

    if (c <= 1) {
      $('#addJob').show();
    }

    // if (b < 4) {
    //   $('#addWork').show();
    // }
  });
  // remove Work

  // addMore Work
  $('#addStyle').click(function () {

    addMoreStyle();

    if (e > 1) {
      $("#removeStyle").show();
    }

    if (e > 1) {
      $('#addStyle').hide();
    }
  })
  // addMore Work



  // remove Work
  $("#removeStyle").click(function () {

    removeStyle();
    if (c <= 1) {
      $("#removeStyle").hide();
    }

    if (c <= 1) {
      $('#addStyle').show();
    }

    // if (b < 4) {
    //   $('#addWork').show();
    // }
  });
  // remove Work


   // addMore Work
   $('#addEv').click(function () {

    addMoreEv();

    if (g > 1) {
      $("#removeEv").show();
    }

    if (g > 1) {
      $('#addEv').hide();
    }
  })
  // addMore Work

  // remove Work
  $("#removeEv").click(function () {

    removeEv();
    if (c <= 1) {
      $("#removeEv").hide();
    }

    if (c <= 1) {
      $('#addEv').show();
    }

  });
  // remove Work

  // form validation
  $("#submitButton").click(function () {

    // personal info
    var name = $("#name").val();
    console.log(name)

    if (document.querySelector('input[type="radio"][name="gender"]:checked')) {
      var gender = document.querySelector('input[type="radio"][name="gender"]:checked').value;
      console.log(gender)
    }



    var age = $("#age").val();
    console.log(age)

    // job info
    var jobDate = $("#job-date").val();
    console.log(jobDate)

    var jobTitle = $("#job-title").val();
    console.log(jobTitle)

    var organization = $("#organization").val();
    console.log(organization)

    var jobSite = $("#job-site").val();
    console.log(jobSite)

    var jobExp = $("#job-exp").val();
    console.log(jobExp)

    var physicalDemands = $("#demands").val();
    console.log(physicalDemands)

    var envFactors = $("#env-factors").val();
    console.log(envFactors)

    var jobSchedule = $("#job-schedule").val();
    console.log(jobSchedule)

    // var previousInjuries = $("#previous-injuries").val();
    // console.log(previousInjuries)

    var rebaScore = $("#reba-score").val();
    console.log(rebaScore)

    var name1 = $("#name1").val();
    console.log(name1)

    var jobTitle1 = $("#job-title1").val();
    console.log(jobTitle1)

    prompt = `
    Write a ergonomic evaluation report, provide recommendations and 
implementation of ergonomic interventions. This is a report that an ergonomist or safety advisor is 
writing for their company managers.\n\n
Enter information about the employee\n
Name: ${name}\n
Job title and short job description : ${jobTitle} \n
Organization working for: ${organization} \n
Job site: ${jobSite} \n
Length of Time on the Job: ${jobExp} \n
Physical Demands including any risk factors: ${physicalDemands} \n
Environmental factors: ${envFactors} \n
Job Schedule and Breaks: ${jobSchedule} \n
What was the REBA score using Vergo? ${rebaScore}\n

Enter information about the evaluator\n
The person who is conducting the ergonomic assessment: ${name1}\n
Job title: ${jobTitle1}\n
When was the job task assessed using Vergo?\n
Job task was assessed on ${jobDate} for hazards related to musculoskeletal disorders, as well as 
other issues pertaining to workplace health and safety. Assessment took place by using a computer 
vision pose estimation ergonomic tool that uses REBA standard.\n 

    `

    var inputsForValidate = $('.valid');

    var value = check(inputsForValidate);
    if (value) {

      var url = "https://api.openai.com/v1/completions";

      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);

      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader(
        "Authorization",
        `Bearer ${key}`
      );

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          let response = xhr.responseText;
          response = JSON.parse(response);

          console.log(response);
          var output1=response["choices"][0]["text"];
          var output2=`\n\n*************************************************************** \nDisclaimer: The ergonomic evaluation report provided by Vergo is intended for informational purposes only and is not intended to serve as a substitute for professional medical or legal advice. The information contained in this report is based on our assessment of the information provided to us, and we make no representation or warranty as to the accuracy, completeness, or suitability of the information contained herein. Additionally, while we have made every effort to ensure that the recommendations provided in this report are based on best practices and industry standards, we make no guarantee that implementation of these recommendations will prevent or mitigate any health or safety risks. By utilizing this report, you agree to hold Vergo harmless from any and all claims, liabilities, damages, and expenses that may arise from your use of this information.`;
          document.getElementById("output").innerHTML = output1+output2
            
        }
      };

      if (prompt) {
        prompt = JSON.parse(JSON.stringify(prompt));
      }

      var data = {
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 3200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      };

      data = JSON.stringify(data);

      xhr.send(data);

    }

  });



}); // documet ready end line

// addMore function Work
var b = 1;
function addMoreWork() {


  // if(b==4){
  //   $("#workcClonedivFour").show(500);
  //   b++;
  // }
  if (b == 3) {
    $("#workcClonedivThree").show(500);
    b++;
  }
  if (b == 2) {
    $("#workcClonedivTwo").show(500);
    b++;
  }

  if (b == 1) {
    $("#workcClonediv").show(500);
    b++;
  }

}

function removeWork() {

  if (b == 2) {
    $("#workcClonediv").hide(500);
    b--;
    // $("#workcClonediv input").val('');
  }

  if (b == 3) {
    $("#workcClonedivTwo").hide(500);
    b--;
    // $("#workcClonedivTwo input").val('');
  }
  if (b == 4) {
    $("#workcClonedivThree").hide(500);
    b--;
    // $("#workcClonedivThree input").val('');
  }
}

var c = 1;
function addMoreJob() {

  if (c == 1) {
    $("#jobSection").show(500);
    c++;
  }

}

function removeJob() {

  if (c == 2) {
    $("#jobSection").hide(500);
    c--;
    // $("#jobSection input").val('');
  }
}

// addMore function Work

var e = 1;
function addMoreStyle() {

  if (e == 1) {
    $("#styleSection").show(500);
    e++;
  }

}

function removeStyle() {

  if (e == 2) {
    $("#styleSection").hide(500);
    e--;
    // $("#styleSection input").val('');
  }
}

var g = 1;
function addMoreEv() {

  if (g == 1) {
    $("#evSection").show(500);
    g++;
  }

}

function removeEv() {

  if (g == 2) {
    $("#evSection").hide(500);
    g--;
    // $("#evSection input").val('');
  }
}





// form validation function
function check(inputsForValidate) {
  var result = true;
  var firstFailedInput = null;
  var flagForFirstFailedInput = 0;



  inputsForValidate.each(function (i) {

    $(this).removeClass('valid-error');

    if ($(this).is(':visible')) {
      if ($(this).val().trim().length == 0) {
        $(this).addClass('valid-error');
        result = false;
        if (flagForFirstFailedInput == 0) {
          firstFailedInput = $(this);
          flagForFirstFailedInput = 1;
        }

      }
    }


  });

  if (firstFailedInput != null) {
    $('html, body').animate({
      scrollTop: firstFailedInput.offset().top
    }, 700);
  }

  if(!document.querySelector('input[type="checkbox"][name="agree"]:checked')){
    document.getElementsByClassName('agree')[0].innerHTML="Please agree to our terms and conditions"
  }
  if(document.querySelector('input[type="checkbox"][name="agree"]:checked')){
    document.getElementsByClassName('agree')[0].innerHTML=""
  }



  return result;
}
