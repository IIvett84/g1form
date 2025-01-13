(function($){



  if($('html').attr('lang') === 'en-US')
  
    defaultLang = 0;
  
  else
  
    defaultLang = 1;
  
  
  
  //booking
  
  var packs = {
  
    'Céges futam': {
  
      'Championship Grand Prix Race' : {
  
        eng : 'Championship Grand Prix Race', 
  
        min : 6,
  
        max : 9,
  
        disable : [-1],
  
        link : '/rendezvenyek/ceges-verseny-csomagok #championship-grand-prix-race',
  
        linken : '/en/events/business-packages #championship-grand-prix-race',
  
        round : 4,
  
        addressHu : 'reservation@g1kartcenter.hu',
  
        addressEn : 'office@g1kartcenter.hu'
  
      },
  
      'Championship Le Mans Race' : {
  
        eng : 'Championship Le Mans Race', 
  
        min : 6,
  
        max : 9,
  
        disable : [-1],
  
        link : '/rendezvenyek/ceges-verseny-csomagok #championship-le-mans-race',
  
        linken : '/en/events/business-packages #championship-le-mans-race',
  
        round : 6,
  
        addressHu : 'reservation@g1kartcenter.hu',
  
        addressEn : 'office@g1kartcenter.hu'
  
      }
  
    },
  
    'Normál futam': {
  
      'Csomag nélkül' : {
  
        eng : 'Without package', 
  
        min : 1,
  
        max : 100,
  
        disable : [-1],
  
        addressHu : 'reservation@g1kartcenter.hu',
  
        addressEn : 'office@g1kartcenter.hu'
  
      },
  
      'Champion mini' : {
  
        eng : 'Champion mini', 
  
        min : 5,
  
        max : 100,
  
        disable: [-1],
  
        link: '/rendezvenyek/szuletesnapok-leany-es-legenybucsuk #champion-mini',
  
        linken: '/en/events/party-events-packages #champion-mini',
  
        round: 2,
  
        addressHu : 'reservation@g1kartcenter.hu',
  
        addressEn : 'office@g1kartcenter.hu'
  
      },
  
      'Champion basic' : {
  
        eng : 'Champion basic', 
  
        min : 5,
  
        max : 100,
  
        disable : [-1],
  
        link : '/rendezvenyek/szuletesnapok-leany-es-legenybucsuk #champion-basic',
  
        linken : '/en/events/party-events-packages #champion-basic',
  
        round : 3,
  
        addressHu : 'reservation@g1kartcenter.hu',
  
        addressEn : 'office@g1kartcenter.hu'
  
      },
  
      'Champion advance' : {
  
        eng : 'Champion advance', 
  
        min : 5,
  
        max : 100,
  
        disable : [-1],
  
        link : '/rendezvenyek/szuletesnapok-leany-es-legenybucsuk #champion-advance',
  
        linken : '/en/events/party-events-packages #champion-advance',
  
        round : 5,
  
        addressHu : 'reservation@g1kartcenter.hu',
  
        addressEn : 'office@g1kartcenter.hu'
  
      }
  
    },
  
    'Gyermek futam': {
  
      'Csomag nélkül' : {
  
        eng : 'Without package', 
  
        min : 1,
  
        max : 100,
  
        disable : [6],
  
        addressHu : 'reservation@g1kartcenter.hu',
  
        addressEn : 'office@g1kartcenter.hu'
  
      },
  /*
      'Kid mini' : {
  
        eng : 'Kid mini', 
  
        min : 1,
  
        max : 8,
  
        disable: [1,2,3,4,5,6],
  
        link: '/rendezvenyek/gyermek-szuletesnapok #kid-mini',
  
        linken: '/en/events/kid-birthdays #kid-mini',
  
        round: 3,
  
        addressHu : 'reservation@g1kartcenter.hu',
  
        addressEn : 'office@g1kartcenter.hu'
  
      },
  
      'Kid multi' : {
  
        eng : 'Kid multi', 
  
        min : 9,
  
        max : 12,
  
        disable: [1,2,3,4,5,6],
  
        link: '/rendezvenyek/gyermek-szuletesnapok #kid-multi',
  
        linken: '/en/events/kid-birthdays #kid-multi',
  
        round: 3,
  
        addressHu : 'reservation@g1kartcenter.hu',
  
        addressEn : 'office@g1kartcenter.hu'
  
      },
  
      'Kid maxi' : {
  
        eng : 'Kid maxi', 
  
        min : 13,
  
        max : 16,
  
        disable: [1,2,3,4,5,6],
  
        link: '/rendezvenyek/gyermek-szuletesnapok #kid-maxi',
  
        linken: '/en/events/kid-birthdays #kid-maxi',
  
        round: 3,
  
        addressHu : 'reservation@g1kartcenter.hu',
  
        addressEn : 'office@g1kartcenter.hu'
  
      }
  */
    }
  
  };
  
  
  
  //email validation
  
  function isValidEmailAddress(emailAddress) {
  
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
    return pattern.test(emailAddress);
  
  }
  
  
  
  $(document).on('click', '.pack-loader .closer, .whole-overlay', function(){
  
    $('.pack-loader').fadeOut(function(){
  
      $('.whole-overlay').fadeOut();
  
    });
  
    return false;
  
  });
  
  
  
  $(document).on('click', '.feedback .closer', function(){
  
    $('.feedback .box').fadeOut(function(){
  
      $('.feedback').fadeOut();
  
    });
  
    return false;
  
  });
  
  
  
  
  
  $(document).ready(function(){
  
    //timepicker
  
      if(defaultLang)
  
        clearText = 'Törlés';
  
      else
  
        clearText = 'Delete';
  
    var $time_input = $('.timepicker').pickatime({
  
      clear: clearText,
  
      format: 'HH:i',
  
      interval: 10,
  
      min: [8,0],
  
      max: [23,0],
  
      onClose : function(){
  
        vVal = this.get('value');
  
        if(vVal === '')
  
          $('.timepicker').parent().find('label span').css({opacity: 1});
  
        else
  
          $('.timepicker').removeClass('error').parent().find('label span').css({opacity: 0});
  
      }
  
    });
  
    var time_picker = $time_input.pickatime('picker');
  
    
  
    //datepicker
  
    var $date_input = $('.datepicker').pickadate({
  
      min: true,
  
      onClose : function(){
  
        vVal = this.get('value');
  
        if(vVal === ''){
  
          $('.datepicker').parent().find('label span').css({opacity: 1});
  
          time_picker.stop();
  
          $('.timepicker').prop('disabled', true).parent().addClass('disab');
  
        }
  
        else{
  
          $('.datepicker').removeClass('error').parent().find('label span').css({opacity: 0});
  
          time_picker.start();
  
          $('.timepicker').prop('disabled', false).parent().removeClass('disab');
  
        }
  
      }
  
    });
  
    // Use the picker object directly.
  
    var date_picker = $date_input.pickadate('picker');
  
  
  
    $(document).on('change', 'select[name="type"]', function(){
  
      $('select[name="pack"], input, textarea').prop('disabled', true).parent().addClass('disab');
  
      //get target pack
  
      var target = $(this).find('option:selected').val();
  
      targetPos = $(this).prop('selectedIndex');
  
  
  
      $('.pack-loader-opener').fadeOut();
  
      if(target !== ''){
  
  
  
        //fill list with options
  
        html = '';
  
        $.each(packs[target], function(index, value){
  
          //value = index.split(';');
  
          html += '<option value="' + index + '">';
  
          if(defaultLang)
  
            html += index + '</option>';
  
          else
  
            html += value.eng + '</option>';
  
        });
  
        
  
        //delete all options from list except first
  
        $('select[name="pack"]').find('option:gt(0)').remove();
  
        $('select[name="pack"]').append(html).prop('disabled', false).parent().removeClass('disab');
  
        $(this).removeClass('error');
  
        
  
        //add feldobox checkbox if normal run
  
        if(target === 'Normál futam'){
  
          if($('.checkbox-holder .padder2').length === 0){
  
            if(defaultLang)
  
              chkName = 'Feldobox kuponnal rendelkezem';
  
            else
  
              chkName = 'I have Feldobox coupon';
  
            chkInput = '<div class="padder2 disab">';
  
            chkInput += '<input disabled="" class="dontcheck" type="checkbox" id="feldobox" name="feldobox" title="' + chkName + '" />';
  
            chkInput += '<label class="neutral" for="feldobox">' + chkName + '</label>';
  
            chkInput += '</div>';
  
            $('.checkbox-holder').append(chkInput);
  
          }
  
        }
  
        else{
  
          $('.checkbox-holder .padder2').remove();
  
        }
  
        
  
        if(target === 'Céges futam'){
  
          //add extra company name input
  
          if($('.company-holder .padder2').length === 0){
  
            if(defaultLang)
  
              cmpName = 'Cégnév';
  
            else
  
              cmpName = 'Company name';
  
            extraInput = '<div class="padder2 disab">';
  
            extraInput += '<label for="company"><i class="fa fa-gear"></i><span>' + cmpName + '</span></label>';
  
            extraInput += '<input disabled="" class="labeled label-fader" type="text" id="company" name="company" title="' + cmpName + '" />';
  
            extraInput += '</div>';
  
            $('.company-holder').append(extraInput);
  
          }
  
        }
  
        else{
  
          $('.company-holder .padder2').remove();
  
        }
  
      }
  
      else{
  
        $(this).addClass('error');
  
      }
  
      
  
      date_picker.clear();
  
      $('.datepicker').parent().find('label span').css({opacity: 1});
  
      time_picker.clear();
  
      $('.timepicker').parent().find('label span').css({opacity: 1});
  
      
  
    });
  
    
  
    $(document).on('change', 'select[name="pack"]', function(){
  
      var selPack = $(this).find('option:selected').val();
  
      
      if(selPack === ''){
  
        $('input, textarea, button').prop('disabled', true).parent().addClass('disab');
  
        $(this).addClass('error');
  
        $('.pack-loader-opener').fadeOut();
  
      }
  
      else{
  
        $(this).removeClass('error');
  
        var selType = $('select[name="type"]').find('option:selected').val();
        
  
        //set person min and max
  
        $('input[name="person"]').attr({
  
          'min' : packs[selType][selPack].min,
  
          'max' : packs[selType][selPack].max
  
        });
  
        
  
        if(selPack !== 'Csomag nélkül'){				
  
          $('.pack-loader-opener').fadeIn();
  
          //set rounds
  
          round = packs[selType][selPack].round;
  
          
  
          $('input[name="round"]').attr({
  
            'min' : round,
  
            'max' : round
  
          }).val(round).parent().find('label span').fadeTo(10, 0);
  
          
  
          if(defaultLang)
  
            kidsOrgName = 'Létszám';
  
          else
  
            kidsOrgName = 'Persons';
  
          $('input[name="person"]').parent().find('label span').html(kidsOrgName);
  
          $('.adults-holder .padder2').remove();
  
        }
  
        else{
  
          //if kid without package then open extra input for 
  
          if(selType == 'Gyermek futam'){
  
            if(defaultLang){
  
              kidsName = 'Gyermekek száma (8-14 év)';
  
              adltName = 'Résztvevő felnőttek száma (14 év felett)';
  
            }
  
            else{
  
              kidsName = 'Number of kids (8-14 years)';
  
              adltName = 'Number of adults (over 14 years)';
  
            }
  
            //set kids number labels
  
            $('input[name="person"]').parent().find('label span').html(kidsName);
  
            if($('.adults-holder .padder2').length === 0){
  
              extraInput = '<div class="padder2 disab">';
  
              extraInput += '<label for="adults"><i class="fa fa-users"></i><span>' + adltName + '</span></label>';
  
              extraInput += '<input disabled="" class="labeled label-fader dontcheck" type="number" min="0" max="100" id="adults" name="adults" title="' + adltName + '" />';
  
              extraInput += '</div>';
  
              $('.adults-holder').append(extraInput);
  
            }
  
          }
  
          else{
  
            if(defaultLang)
  
              kidsOrgName = 'Létszám';
  
            else
  
              kidsOrgName = 'Persons';
  
            $('input[name="person"]').parent().find('label span').html(kidsOrgName);
  
            $('.adults-holder .padder2').remove();
  
          }
  
          
  
          $('input[name="round"]').attr({
  
            'min' : 1,
  
            'max' : 100
  
          }).val('').parent().find('label span').fadeTo(10, 1);
  
          $('.pack-loader-opener').fadeOut();
  
        }
  
        //reset
  
        date_picker.set('enable', [1,2,3,4,5,6,7]);
  
        //limit if needed
  
        //disabled days
  
        disabDays = [
  
          [2017,11,24], //month -1 !!!
  
          [2017,11,25]
  
        ];
  
        
  
        for (var counter = 0; counter < packs[selType][selPack].disable.length; counter++) {
  
          disabDays.push(packs[selType][selPack].disable[counter]);
  
          //console.log(packs[selType][selPack].disable[counter]);
  
        }
  
        
  
        date_picker.set('disable', disabDays);
  
        
  
        //$(this).parent().parent().next().find('.disab').removeClass('disab').find(':disabled').prop('disabled', false);
  
        $('input, textarea, button').each(function(){
  
          if(!($(this).hasClass('timepicker')))
  
            $(this).prop('disabled', false).parent().removeClass('disab');
  
        });
  
      }
  
    });
  
    
  
    $(document).on('change', '.datepicker', function(){
  
      time_picker.clear();
  
      $('.timepicker').parent().find('label span').fadeTo(10, 1);
  
      var selDate = $(this).val();
  
      var selDay = date_picker.get('select');
  
      defaultMaxTime = [21,50];
  
      if(selDay !== null){
  
        //alert('a kiválasztott dátum: ' + selDate);
  
        // Closed days - just for sure
  
        if(selDate === '2017-12-24' || selDate === '2017-12-25'){
  
          minTime = [0,0];
  
          maxTime = [0,0];
  
        }
  
        else if(selDate === '2016-12-26' || selDate === '2016-12-27' || selDate === '2016-12-28' || selDate === '2016-12-29' || selDate === '2016-12-30' || selDate === '2017-01-01'){
  
          minTime = [12,0];
  
          if($('select[name="type"]').find('option:selected').val() === 'Gyermek futam')
  
            maxTime = [16,0];
  
          else
  
            maxTime = defaultMaxTime;
  
        }
  
        else if(selDate === '2016-12-31'){
  
          minTime = [10,0];
  
          maxTime = [16,0];
  
        }
  
        else if(selDate === '2019-03-15' || selDate === '2017-04-13' || selDate === '2017-04-14' || selDate === '2017-04-17' || selDate === '2017-04-18' || selDate === '2017-05-01'){
  
          minTime = [10,0];
  
          if($('select[name="type"]').find('option:selected').val() === 'Gyermek futam')
  
            maxTime = [16,0];
  
          else
  
            maxTime = defaultMaxTime;
  
        }
  
        else if(selDate === '2017-06-05'){
  
          minTime = [12,0];
  
          maxTime = defaultMaxTime;
  
        }
  
        else if(selDate === '2017-08-20' || selDate === '2018-08-20' || selDate === '2019-08-20'){
  
          minTime = [10,0];
  
          maxTime = [16,30];
  
        }
  
        else if(selDate === '2018-10-22' || selDate === '2018-10-23' || selDate === '2018-11-01' || selDate === '2018-11-02'){
  
          minTime = [10,0];
  
          maxTime = defaultMaxTime;
  
        }
  
        else if(selDate === '2017-10-30' || selDate === '2017-10-31' || selDate === '2017-11-01' || selDate === '2017-11-02' || selDate === '2017-11-03'){
  
          minTime = [12,0];
  
          maxTime = defaultMaxTime;
  
        }
  
        else if(selDate === '2018-04-30' || selDate === '2018-05-01' || selDate === '2018-05-21' || selDate === '2019-08-19'){
  
          minTime = [12,0];
  
          maxTime = [21,50];
  
        }
  
        else if(selDate === '2017-12-31'){
  
          minTime = [10,0];
  
          maxTime = [15,30];
  
        }
  
        else if(selDate === '2019-04-18' || selDate === '2019-04-19' || selDate === '2019-04-20' || selDate === '2019-04-21' || selDate === '2019-04-22' || selDate === '2019-04-23' || selDate === '2019-05-01'){
          minTime = [10,0];
          maxTime = [21,50];
        }
  
        else{
  
          selDay = selDay.day;
  
          if($('select[name="type"]').find('option:selected').val() === 'Gyermek futam'){
  
            //vasárnap
  
            if(selDay === 0){
  
              minTime = [10,0];
  
              maxTime = [19,50];
  
            }
  
            //többi nap
  
            else{
  
              minTime = [14,0];
  
              maxTime = [17,50];
  
            }
  
          }
  
          else{
  
            //vasárnap
  
            if(selDay === 0){
  
              minTime = [10,0];
  
              maxTime = defaultMaxTime;
  
            }
  
            //szombat
  
            else if(selDay === 6){
  
              minTime = [10,0];
  
              maxTime = defaultMaxTime;
  
            }
  
            //többi nap
  
            else{
  
              minTime = [14,0];
  
              maxTime = defaultMaxTime;
  
            }
  
          }
  
        }
  
        
  
        time_picker.set('min', minTime);
  
        time_picker.set('max', maxTime);
  
      }
  
    });
  
  });
  
  
  
    $(document).on('submit', '.booking', function(){
  
      //e.preventDefault();
  
      form = $(this);
  
      
  
      selType = form.find('select[name="type"]').find('option:selected').val();
  
      selPack = form.find('select[name="pack"]').find('option:selected').val();
  
      
  
      //check if there are empty fields
  
      error = 0;
  
      if(defaultLang)
  
        error_msg = 'Hiba!';
  
      else
  
        error_msg = 'Error!';
  
      form.find('select, input, textarea').each(function(){
  
        if($(this).val() === '' && !($(this).hasClass('dontcheck'))){
  
          if($(this).attr('name') != 'date_submit'){
  
            $(this).addClass('error');
  
            error = 1;
  
            if(defaultLang)
  
              error_msg += '\nKérem töltse ki: ' + $(this).parent().find('label span').text();
  
            else
  
              error_msg += '\nPlease fill in: ' + $(this).parent().find('label span').text();
  
          }
  
        }
  
        else{
  
          $(this).removeClass('error');
  
          //if email
  
          if($(this).attr('type') === 'email'){
  
            if(!isValidEmailAddress($(this).val())){
  
              $(this).addClass('error');
  
              error = 1;
  
              if(defaultLang)
  
                error_msg += '\nHelytelen e-mail formátum';
  
              else
  
                error_msg += '\nIncorrect e-mail address';
  
            }
  
          }
  
          
  
          //date
  
          if($(this).attr('type') === 'date'){
  
            
  
          }
  
          
  
          //if time
  
          if($(this).attr('type') === 'time'){
  
            
  
          }
  
          
  
          //if person
  
          if($(this).attr('name') === 'person'){
  
            theValue = parseInt($(this).val(), 10);
  
            theMin = parseInt($(this).attr('min'), 10);
  
            theMax = parseInt($(this).attr('max'), 10);
  
            if(theValue < theMin || theValue > theMax){
  
              $(this).addClass('error');
  
              error = 1;
  
              if(defaultLang)
  
                error_msg += '\nA minimális létszám ' + $(this).attr('min') + ' fő, a maximális ' + $(this).attr('max') + ' fő';
  
              else
  
                error_msg += '\nMinimal headcount is ' + $(this).attr('min') + ' person, maximum is ' + $(this).attr('max') + ' person';
  
            }
  
          }
  
          
  
          //if round
  
          if($(this).attr('name') === 'round'){
  
            
  
          }
  
        }
  
      });
  
      if(error){
  
        alert(error_msg);
  
      }
  
      else{
  
        topofWindow = $(window).scrollTop();
  
        topofForm = form.offset().top - 60;
  
        if(topofForm < topofWindow)
  
          $('html, body').animate({scrollTop: topofForm}, 'slow');
  
        
  
        form.find('.feedback').fadeIn(function(){
  
          form.find('.loading').fadeIn(function(){
  
            
  
          });
  
        });
  
  
  
        action = form.data('sendto');
  
        if(defaultLang)
  
          tomail = packs[selType][selPack].addressHu;
  
        else
  
          tomail = packs[selType][selPack].addressEn;
  
        //tomail = 'vityak@freemail.hu';
  
        formData = form.serialize();
  
        if(defaultLang)
  
          title = 'Új bejelentkezés';
  
        else
  
          title = 'Új bejelentkezés (ENG)';
  
        str = selType.replace(' futam', '');
  
        title += ' - ' + str;
  
        if(selPack != 'Csomag nélkül')
  
          title += ' - ' + selPack;
  
          
  
        //feldobox check
  
        if($('.checkbox-holder .padder2').length !== 0){
  
          if($('#feldobox').is(':checked'))
  
            title += ' - Feldobox';
  
        }
  
        
  
        sendData = 'send_type=booking&title=' + title + '&address='+tomail+'&'+formData;
  
        
  
        $.ajax({
  
          type: 'POST',
  
          url: action,
  
          data: sendData
  
        }).done(function(msg){
  
            if(msg === '1'){
  
            //if ok
  
              form.find('.big-icon').removeClass('red').addClass('green').find('fa').removeClass('fa-times').addClass('fa-check');
  
              
  
              if(defaultLang){
  
                form.find('.feedback h3').html('Foglalási igény elküldve!');
  
                html = '';
  
                html = 'Köszönjük foglalási igényét, amelynek feldolgozását hamarosan megkezdjük! ';
  
                html += 'Tájékoztatjuk, hogy ez még nem minősül foglalásnak! ';
  
                html += 'Kollégáink 24 órán belül az Ön által megadott e-mail címre visszaigazolást küldenek, amelyben megerősítik bejelentkezését.<br /><br />';
  
                html += 'Kérjük, amennyiben nem kap visszaigazolást tőlünk, keressen fel minket elérhetőségeink valamelyikén!<br /><br />';
  
                html += 'A foglalás csak visszaigazolással érvényes, kérjük szíves türelmét!<br />Köszönettel: G1 csapata';
  
              }
  
              else{
  
                form.find('.feedback h3').html('Booking request has been sent!');
  
                html = '';
  
                html = 'Thank you for your booking request! This is not a fixed reservation yet! ';
  
                html += 'Our colleagues are going to confirm your booking request via e-mail in 24 hours.<br /><br />';
  
                html += 'If you do not receive the confirmation from us, please contact us!<br /><br />';
  
                html += 'Booking is only valid with written confirmation!<br />Thanks: G1 team';					
  
              }
  
                
  
              form.find('.feedback .box .addi').html(html);
  
              
  
              //reset form
  
              form.find('select').each(function(){
  
                $(this).find('option:first').prop('selected', true);
  
              });
  
              
  
              form.find('select[name="pack"]').prop('disabled', true).parent().addClass('disab');
  
              
  
              form.find('input, textarea').each(function(){
  
                $(this).val('').prop('disabled', true).parent().find('label span').fadeTo(10, 1).parent().parent().addClass('disab');
  
              });
  
            }
  
            else{
  
            //if no
  
              form.find('.big-icon').removeClass('green').addClass('red').find('.fa').removeClass('fa-check').addClass('fa-times');
  
              
  
              if(defaultLang){
  
                form.find('.feedback h3').html('Hiba!');
  
                toHtml = '';
  
                toHtml += 'A foglalási igény elküldése sikertelen volt, kérjük próbálja meg újra!<br />';
  
                toHtml += msg + '<br />';
  
                toHtml += 'Amennyiben többszöri alkalomra sem sikerül a küldés kérem keressen fel minket elérhetőségeink valamelyikén!<br />Köszönettel: G1 csapata';
  
              }
  
              else{
  
                form.find('.feedback h3').html('Error!');
  
                toHtml = '';
  
                toHtml += 'Your booking request could not be sent. Please try again!<br />';
  
                toHtml += msg + '<br />';
  
                toHtml += 'If multiple requests did not succeed, please contact us!<br />Thanks: G1 team';
  
              }
  
              form.find('.feedback .box .addi').html(toHtml);
  
            }
  
        }).fail(function(){
  
          form.find('.big-icon').removeClass('green').addClass('red').find('.fa').removeClass('fa-check').addClass('fa-times');
  
          if(defaultLang){
  
            form.find('.feedback h3').html('Hiba!');
  
            toHtml = '';
  
            toHtml += 'A foglalási igény elküldése sikertelen volt, kérjük próbálja meg újra!<br />';
  
            toHtml += '<br />';
  
            toHtml += 'Amennyiben többszöri alkalomra sem sikerül a küldés kérem keressen fel minket elérhetőségeink valamelyikén!<br />Köszönettel: G1 csapata';
  
          }
  
          else{
  
            form.find('.feedback h3').html('Error!');
  
            toHtml = '';
  
            toHtml += 'Your booking request could not be sent. Please try again!<br />';
  
            toHtml += '<br />';
  
            toHtml += 'If multiple requests did not succeed, please contact us!<br />Thanks: G1 team';
  
          }
  
          form.find('.feedback .box .addi').html(toHtml);
  
        }).always(function(){
  
            form.find('.feedback .box').delay(500).fadeIn('slow', function(){
  
              form.find('.loading').delay(500).fadeOut();
  
            });
  
        });
  
      }
  
    return false;
  
    });
  
  
  
  
  
  $(document).on('click', '.pack-loader-opener', function(){
  
    var selType = $('select[name="type"]').find('option:selected').val();
  
    var selPack = $('select[name="pack"]').find('option:selected').val();
  
    
  
    if(selType !== '' && selPack !== '' && selPack !== 'Csomag nélkül'){
  
      var siteUrl = $('form').data('site-url');
  
      if(defaultLang)
  
        var href = siteUrl + '' + packs[selType][selPack].link;
  
      else
  
        var href = siteUrl + '' + packs[selType][selPack].linken;
  
      $('.puthere').load(href, function(){
  
        $('.whole-overlay').fadeIn(function(){
  
          $('.pack-loader').fadeIn();
  
        });
  
      });
  
    }
  
    return false;
  
  });
  
  
  
  })(jQuery);
