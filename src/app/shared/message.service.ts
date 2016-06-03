import {Injectable} from '@angular/core';
interface myMessage {
	message: string;
}


@Injectable()
export class MessageService {
  private message = 'Hello Message';
  private myVeryOwnMessage: myMessage = {message: ''};

  getMessage(): string {
    return this.message;
  };

  getMyMessage() : string {
  	return this.myVeryOwnMessage.message;
  }

  setMyMessage (newMessage : string) {
  	 return this.myVeryOwnMessage.message = newMessage;
  }

  setMessage(newMessage: string){
     return this.message = newMessage;

  };
}
