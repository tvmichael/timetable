;(function () {
    function c (log) { console.log(log);}
    function d (log) { console.dir(log);}
    console.time('TimeTable');

    // variables
    var i, j;           // short-term variables
    var textXml;
    var timeTable = {
        'period':[],    // {name:'', short:'', period:'', starttime:'', endtime:''}
        'daysdef':[],   // {id:'', name:'', short:'', days:''}
        'weeksdef':[],  // {id:'', name:'', short:'', weeks:''}
        'termsdef':[],  // {id:'', name:'', short:'', terms:''}
        'subject':[],   // {id:'', name:'', short:''}
        'teacher':[],   // {id:'', name:'', short:'', gender:'', color:'', email:'', mobile:''}
        'classroom':[], // {id:'', name:'', short:'', capacity:''}
        'grade':[],     // {name:'', short:'', grade:''}
        'class':[],     // {id:'', name:'', short:'', teacherid:'', classroomids:'', grade:''}
        'group':[],     // {id:'', name:'', classid:'', studentids:'', entireclass:'', divisiontag:'', studentcount:''}
        'lesson':[],    // {id:'', classids:'', subjectid:'', periodspercard:'', periodsperweek:'', teacherids:'', classroomids:'', groupids:'', capacity:'', seminargroup:'', termsdefid:'', weeksdefid:'', daysdefid:''}
        'card':[]       // {lessonid:'', classroomids:'', period:'', weeks:'', terms:'', days:''}
    };

    //--------------------------------------------------------------------------------//
    // import XML file from - 'aSc TimeTable 2017 xml (Data base)'
    function makeTimeTableObject() {
        var xml = document.getElementsByTagName('xml')[0];
        //PERIOD
        textXml = xml.getElementsByTagName('period');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.period[i] = {name:'', short:'', period:'', starttime:'', endtime:''};
            timeTable.period[i].name = textXml[i].attributes[0].value;
            timeTable.period[i].short = textXml[i].attributes[1].value;
            timeTable.period[i].period = textXml[i].attributes[2].value;
            timeTable.period[i].starttime = textXml[i].attributes[3].value;
            timeTable.period[i].endtime = textXml[i].attributes[4].value;
        }
        //DAYS_DEF
        textXml = xml.getElementsByTagName('daysdef');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.daysdef[i] = {id:'', name:'', short:'', days:''};
            timeTable.daysdef[i].id = textXml[i].id;
            timeTable.daysdef[i].name = textXml[i].attributes[1].value;
            timeTable.daysdef[i].short = textXml[i].attributes[2].value;
            timeTable.daysdef[i].days = textXml[i].attributes[3].value;
        }
        //WEEK_DEF
        textXml = xml.getElementsByTagName('weeksdef');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.weeksdef[i] = {id:'', name:'', short:'', weeks:''};
            timeTable.weeksdef[i].id = textXml[i].id;
            timeTable.weeksdef[i].name = textXml[i].attributes[1].value;
            timeTable.weeksdef[i].short = textXml[i].attributes[2].value;
            timeTable.weeksdef[i].weeks = textXml[i].attributes[3].value;
        }
        //TERMS_DEF
        textXml = xml.getElementsByTagName('termsdef');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.termsdef[i] = {id:'', name:'', short:'', terms:''};
            timeTable.termsdef[i].id = textXml[i].id;
            timeTable.termsdef[i].name = textXml[i].attributes[1].value;
            timeTable.termsdef[i].short = textXml[i].attributes[2].value;
            timeTable.termsdef[i].terms = textXml[i].attributes[3].value;
        }
        //SUBJECT
        textXml = xml.getElementsByTagName('subject');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.subject[i] = {id:'', name:'', short:''};
            timeTable.subject[i].id = textXml[i].id;
            timeTable.subject[i].name = textXml[i].attributes[1].value;
            timeTable.subject[i].short = textXml[i].attributes[2].value;
        }
        // TEACHER
        textXml = xml.getElementsByTagName('teacher');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.teacher[i] = {id:'', name:'', short:'', gender:'', color:'', email:'', mobile:''};
            timeTable.teacher[i].id = textXml[i].id;
            timeTable.teacher[i].name = textXml[i].attributes[1].value;
            timeTable.teacher[i].short = textXml[i].attributes[2].value;
            timeTable.teacher[i].gender = textXml[i].attributes[3].value;
            timeTable.teacher[i].color = textXml[i].attributes[4].value;
            timeTable.teacher[i].email = textXml[i].attributes[5].value;
            timeTable.teacher[i].mobile = textXml[i].attributes[6].value;
        }
        //CLASSROOM
        textXml = xml.getElementsByTagName('classroom');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.classroom[i] = {id:'', name:'', short:'', capacity:''};
            timeTable.classroom[i].id = textXml[i].id;
            timeTable.classroom[i].name = textXml[i].attributes[1].value;
            timeTable.classroom[i].short = textXml[i].attributes[2].value;
            timeTable.classroom[i].capacity = textXml[i].attributes[3].value;
        }
        //GRADE
        textXml = xml.getElementsByTagName('grade');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.grade[i] = {name:'', short:'', grade:''};
            timeTable.grade[i].name = textXml[i].attributes[0].value;
            timeTable.grade[i].short = textXml[i].attributes[1].value;
            timeTable.grade[i].grade = textXml[i].attributes[2].value;
        }
        //CLASS
        textXml = xml.getElementsByTagName('class');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.class[i] = {id:'', name:'', short:'', teacherid:'', classroomids:'', grade:''};
            timeTable.class[i].id = textXml[i].id;
            timeTable.class[i].name = textXml[i].attributes[1].value;
            timeTable.class[i].short = textXml[i].attributes[2].value;
            timeTable.class[i].teacherid = textXml[i].attributes[3].value;
            timeTable.class[i].classroomids = textXml[i].attributes[4].value;
            timeTable.class[i].grade = textXml[i].attributes[5].value;
        }
        //GROUP
        textXml = xml.getElementsByTagName('group');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.group[i] = {id:'', name:'', classid:'', studentids:'', entireclass:'', divisiontag:'', studentcount:''};
            timeTable.group[i].id = textXml[i].id;
            timeTable.group[i].name = textXml[i].attributes[1].value;
            timeTable.group[i].classid = textXml[i].attributes[2].value;
            timeTable.group[i].studentids = textXml[i].attributes[3].value;
            timeTable.group[i].entireclass = textXml[i].attributes[4].value;
            timeTable.group[i].divisiontag = textXml[i].attributes[5].value;
            timeTable.group[i].studentcount = textXml[i].attributes[6].value;
        }
        //LESSON
        textXml = xml.getElementsByTagName('lesson');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.lesson[i] = {id:'', classids:'', subjectid:'', periodspercard:'', periodsperweek:'', teacherids:'', classroomids:'', groupids:'', capacity:'', seminargroup:'', termsdefid:'', weeksdefid:'', daysdefid:''};
            timeTable.lesson[i].id = textXml[i].id;
            timeTable.lesson[i].classids = textXml[i].attributes[1].value;
            timeTable.lesson[i].subjectid = textXml[i].attributes[2].value;
            timeTable.lesson[i].periodspercard = textXml[i].attributes[3].value;
            timeTable.lesson[i].periodsperweek = textXml[i].attributes[4].value;
            timeTable.lesson[i].teacherids = textXml[i].attributes[5].value;
            timeTable.lesson[i].classroomids = textXml[i].attributes[6].value;
            timeTable.lesson[i].groupids = textXml[i].attributes[7].value;
            timeTable.lesson[i].capacity = textXml[i].attributes[8].value;
            timeTable.lesson[i].seminargroup = textXml[i].attributes[9].value;
            timeTable.lesson[i].termsdefid = textXml[i].attributes[10].value;
            timeTable.lesson[i].weeksdefid = textXml[i].attributes[11].value;
            timeTable.lesson[i].daysdefid = textXml[i].attributes[12].value;
        }
        //CARD
        textXml = xml.getElementsByTagName('card');
        for(i = 0; i < textXml.length; i++  ){
            timeTable.card[i] = {lessonid:'', classroomids:'', period:'', weeks:'', terms:'', days:''};
            timeTable.card[i].lessonid = textXml[i].attributes[0].value;;
            timeTable.card[i].classroomids = textXml[i].attributes[1].value;
            timeTable.card[i].period = textXml[i].attributes[2].value;
            timeTable.card[i].weeks = textXml[i].attributes[3].value;
            timeTable.card[i].terms = textXml[i].attributes[4].value;
            timeTable.card[i].days = textXml[i].attributes[5].value;
        }
    } // end makeTimeTableObject
    //--------------------------------------------------------------------------------//
    makeTimeTableObject();
    c(timeTable);


    // create select element
    var selectClass = document.getElementById('select-class');
    textXml = '';
    for (i=0; i<timeTable.class.length; i++){
        textXml = textXml +"<option value='" + timeTable.class[i].id +"'>" + timeTable.class[i].name +"</option>";
    }
    selectClass.innerHTML = textXml;
    selectClass.addEventListener('change',function () {
        createTimeTableClass(this.value);
    });


    // TABLE
    var table  = document.getElementById('xml-table');
    var thead = table.getElementsByTagName('thead')[0];
    var tbody = table.getElementsByTagName('tbody')[0];

    //HEAD
    textXml = '<tr>';
    for(i=2; i<timeTable.daysdef.length; i++){ // починаємо з другої позиції - де записані назви днів
        textXml = textXml +  '<th>' +timeTable.daysdef[i].name + '</th>';
    }
    thead.innerHTML =  textXml + '</tr>';

    //BODY
    function makeTbody() {
        textXml = '';
        for(i=0; i<timeTable.period.length; i++ ) {
            textXml = textXml + '<tr>';
            for (j=2; j<timeTable.daysdef.length; j++){ textXml = textXml + "<td class='td-cell'><span class='tt-c-n'>"+ i +'</span></td>'; }
            textXml = textXml + '</tr>';
        }
        tbody.innerHTML = textXml;
    }
    makeTbody();
    createTimeTableClass(selectClass.value);
    //  STYLE - abbreviation
    /*
     td-cell : style table cell,
     tt-c-n : timetable-container-number
     tt-c-g : timetable-container-group
     tt-c-s : timetable-container-subject
     tt-c-c : timetable-container-class
     tt-con : timetable-container
    */


    // create timetable class - id
    function createTimeTableClass(idClass) {
        console.time('table');
        var insert = false;
        var cellText = '';
        var gT, sT, tT, cT;
        makeTbody();
        // якщо існує картка з нульовим уроком, то враховуємо її
        var minCard = 1;
        for(i=0; i<timeTable.card.length; i++){
            if (timeTable.card[i].period == 0) minCard = 0;
        };

        // проходимо усі картки по днях і уроках
        for(iCard = 0; iCard < timeTable.card.length; iCard++){
            insert = false;
            gT = '';
            sT = '';
            tT = '';
            cT = '';
            // звязуємо Картки з Уроками - шукаємо назву уроку ( LESSONS )
            for (var iLesson = 0; iLesson < timeTable.lesson.length; iLesson++){
                // вибираємо лише ті кардки ІД яких співпадає з вибраним класом, і також такий УРОК є в картці
                var str = timeTable.lesson[iLesson].classids;
                if ( (str.indexOf(idClass) != -1) && (timeTable.lesson[iLesson].id == timeTable.card[iCard].lessonid) ){
                    // шукаємо групу
                    for(i = 0; i <timeTable.group.length; i++ ){
                        str = timeTable.lesson[iLesson].groupids;
                        if (str.indexOf(timeTable.group[i].id) != -1){
                            gT = " <span class='tt-c-g' title='Група'>" +timeTable.group[i].name + '</span>';
                        }
                    }
                    // шукаємо предмет
                    for(i = 0; i <timeTable.subject.length; i++ ){
                        if (timeTable.subject[i].id == timeTable.lesson[iLesson].subjectid ){
                            sT = " <span class='tt-c-s'>" +timeTable.subject[i].name + '</span>';
                        }
                    }
                    // шукаємо викладача
                    for(i = 0; i < timeTable.teacher.length; i++ ){
                        if (timeTable.teacher[i].id == timeTable.lesson[iLesson].teacherids ){
                            tT = " <span class='tt-c-t'>" + timeTable.teacher[i].name + '</span>';
                        }
                    }
                    // шукаємо класну кімнату
                    for(i = 0; i < timeTable.classroom.length; i++ ){
                        if (timeTable.classroom[i].id ==  timeTable.card[iCard].classroomids ){
                            cT = " <span  class='tt-c-c' title='" + timeTable.classroom[i].name + "'>" + timeTable.classroom[i].short + '</span>';
                        }
                    }
                    insert = true;
                }
            } //

            //якщо уророк існує то заносимо текс в клітинку
            if (insert) {
                // Додаємо текс до відповідної клітинки таблиці
                var row = Number(timeTable.card[iCard].period) - minCard;
                var cell =  timeTable.card[iCard].days;
                cell = cell.indexOf('1');
                cellText = "<div class='tt-con'>" + gT + sT + tT + cT + "</div>";
                tbody.rows[row].cells[cell].innerHTML = tbody.rows[row].cells[cell].innerHTML + cellText;
            }
        }
        console.timeEnd('table');
    } // end - createTimeTableClass


    console.timeEnd('TimeTable');
})(); // end function
