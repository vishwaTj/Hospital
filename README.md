# Hospital
Built a Hospital API which interacts with Nodejs server for various tasks

 The Project has been made with scalable file structure
 1.) routes
 2.) controllers 
 3.) config
 4.) models

 --> Routes
           mainly consists of the index.js route file which inturn directs it to different files
           doctor.js has the url for regitering a docotor and Login of a doctor
           patient.js has the url for regitering a patient and view report and making a report
           Report.js gt generating filtered report


--> Controllers
         Controllers are of mainly 3 types 
         1. registring docotor and login of doctor
         2. Adding a patient
         3. generating report of patient and also fetching all reports of one particular type
         
 
--> Models
        These are the schemas usedd and created in this strucutre
             Tree
                    Doctor --- > Patient ----> report the docotor has to be authorised to handle patient and the reports

--> config 
         It is defined to provide a mongoose layer to communicate with mongo db and also to define JWT token file              
