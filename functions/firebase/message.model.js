import {db} from "./config";
import {ref, set} from 'firebase/database'
import timestamp from "../utils/timestamp";
const Message = (message) => {
    this.messaage = message.message
    this.channel = message.channel
    this.from = message.from
}

Message.create = (data, response) => {
    const messageListRef = ref(db, 'channel/messages');
    const newMessageRef = push(messageListRef);
    set(newMessageRef, {
        message: data.message,
        channel: data.channel,
        from: data.from,
        timestamp: timestamp()
    }).then(() => {
        response = {
            status: 200,
            message: 'message sent successfully'
        }
    }).catch((error)=> {
        response = {error}
    });
    return response
}
