import {Injectable} from '@angular/core';
interface myMessage {
	message: string;
}

interface gadget {
  gadgetProp: string;
}


@Injectable()
export class MessageService {
  private message = 'Hello Message';
  private myVeryOwnMessage: myMessage = {message: ''};
  private gadget = 'Hello Gadget';
  private gadgeT: gadget = {gadgetProp: ''};

  stayMessageD(g: string) {
    return this.gadgeT.gadgetProp = g;
  }
  getStayMessage() :string {
    return this.gadgeT.gadgetProp;
  } 

 
  setMyMessage (newMessage : string) {
  	 return this.myVeryOwnMessage.message = newMessage;
  }
  setMessage(newMessage: string){
     return this.message = newMessage;
  };
   getMessage(): string {
    return this.message;
  };

  getMyMessage() : string {
    return this.myVeryOwnMessage.message;
  }

}
