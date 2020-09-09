$('.filter-btn').on('click', function(){
  let type= $(this).attr('id');
  let boxes = $('.project-box');

  $('.main-btn').removeClass('active');
  $(this).addClass('active');
  
  if (type == "sports-btn")
  {
   eachBoxes("sport", boxes)
  } 
  else if (type == "offroad-btn")
  {
    eachBoxes("off-road", boxes)
  } 
  else if (type == "classic-btn")
  {
    eachBoxes("classic", boxes)
  } 
  else
  {
    eachBoxes("all", boxes)
  }



  function eachBoxes(type, boxes){
    if (type == 'all')
    {
      $(boxes).fadeIn();
    }
    else
    {
      $(boxes).each(function(index, element){
      if (!$(this).hasClass(type))
      {
        $(this).fadeOut("slow")
      }
      else
      {
        $(this).fadeIn()
      }

      })
    }
  }
})

// Schedule a service
$("#submit-service").on("click", function(){
  let name = document.querySelector("#nametxt").value
  let nameErro = namecheck(name)

  // date test
  let fulldate = document.querySelector("#weekdaytxt").value.split("-")
  let dateErro = dateCheck(fulldate)

  let ctype = document.querySelector("#typetxt").value
  let entry = document.querySelector("#periodtxt").value

  $("#nametxt").focus(function(){
    document.querySelector("#name-error").style.visibility = "hidden"
    nameErro = 0
  })
  $("#weekdaytxt").focus(function(){
    document.querySelector("#date-error").style.visibility = "hidden"
    dateErro = 0
  })

  if (nameErro == 0 && dateErro == 0)
  {
    document.getElementById('submit-service').onclick = function(){
      let date = fulldate.reverse();
    swal({
      title: 'Want to confirm the service schedule?',
      text: `Hello ${name}, do you want to confirm your appointment with specialists in ${ctype} cars?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes I confirm!',
      cancelButtonText: 'Was mistake...'
      }).then((result) => {
        if (result.value) {
          swal(
            'Your appointment was scheduled!',
            `Take your car on ${date.toString().replace(/,/g,"/")} day at ${entry} part`,
            'success'
          )
        }
      })
    };
  }
  
})

function namecheck(name)
{
  let re = /[0-9!@#$%*()_+^&{}}:;?.]/
  if(re.test(name) || name == "")
  {
    document.querySelector('#name-error').style.visibility = "visible"
    return 1;
  }
  return 0;
}
function dateCheck(fulldate)
{
  let currentDate = new Date()
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth()+1;
  let day = currentDate.getDate()

  if (fulldate[0] != year && fulldate[0] != year+1 || 
    fulldate[0] == year && fulldate[1] < month || 
    fulldate[0] == year && fulldate[1] == month && fulldate[2] < day)
  {
    document.querySelector('#date-error').style.visibility = "visible"
    return 1;
  }
  return 0;
}






 