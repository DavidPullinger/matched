import Talk from "talkjs";
import React, { useEffect } from 'react';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.inbox = undefined;
    }

    componentDidMount() {
        // Promise can be `then`ed multiple times
        Talk.ready
            .then(() => {
                const me = new Talk.User({
                    id: "12345231",
                    name: "George Looney",
                    email: "george@looney.net",
                    photoUrl: "https://talkjs.com/docs/img/george.jpg",
                    welcomeMessage: "Hey there! How are you? :-)"
                });

                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: "tHDgFBPQ",
                        me: me
                    });
                }

                const other = new Talk.User({
                    id: "54321",
                    name: "Owen Venter",
                    email: "ronald@teflon.com",
                    photoUrl: "https://talkjs.com/docs/img/ronald.jpg",
                    welcomeMessage: "Hey there! Love to chat"
                });
                const other2 = new Talk.User({
                    id: "54322",
                    name: "David Pullinger",
                    email: "david@teflon.com",
                    photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    welcomeMessage: "Hey there! Love to chat"
                });

                // You control the ID of a conversation. oneOnOneId is a helper method that generates
                // a unique conversation ID for a given pair of users. 
                const conversationId = Talk.oneOnOneId(me, other2);

                const conversation = window.talkSession.getOrCreateConversation(conversationId);
                conversation.setParticipant(me);
                conversation.setParticipant(other2);

                this.inbox = window.talkSession.createInbox({
                    selected: conversation
                });
                this.inbox.mount(this.container);

            })
            .catch(e => console.error(e));
    }

    componentWillUnmount() {
        if (this.inbox) {
            this.inbox.destroy();
        }
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Your Chats</h1>
                <span>
                    <div style={{ height: '500px' }} ref={c => this.container = c}>Loading...</div>
                </span>
            </div>
        );
    }
}

export default Chat;