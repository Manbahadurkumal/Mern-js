class MailService{
    #transporter  // this variable is not used outside this class
    constructor(){
        // connection
        // initial class clal, initilize, value default set
    }
    sendEmail = (to, sub,  message, attach) =>{
        //connect
        //logic semail send
        // SMTP --->email clients typically use a program with SMTP for sending email.
        this.#transporter //connection
    }
    receiveEmail = () =>{
        // connection
    }

}
const mailSvc = new MailService()
console.log(mailSvc)