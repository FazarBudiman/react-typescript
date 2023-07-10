import { message } from "antd"
import { NoticeType } from "antd/es/message/interface"

class Alerts {
  private content: string 
  private type: NoticeType 

  public constructor(type: NoticeType, content: string ){
    this.content = content
    this.type = type
  }

  public setType(type: NoticeType){
    this.type = type;
  }
  
  public setContent(content : string) {
    this.content = content;
  }

  alert(){
    message.open({type:`${this.type}`, content:`${this.content}`, duration: 2})
  }
}

class AlertFactory {
  public createAlert ( type: NoticeType, content: string): Alerts{
    if (type === "error") {
      return new Alerts("error", content);
    } else if (type === "success") {
      return new Alerts("success", content)
    }
    return new Alerts("info", content)
  }
}

export default AlertFactory