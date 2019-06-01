import React, { Component } from "react"
import { default as Chatkit } from '@pusher/chatkit-server';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

const chatkit = new Chatkit({
    instanceLocator: "v1:us1:634e15b3-fb2d-47cd-b7aa-3d8749095de8",
    key: "616ff3c1-c8f5-4597-b5bb-f1e293f6a4f7:nYsoZ6crOrC7i3P/zpgpOaMIJQtvcuDs86pRhFWAuyw="
})

class ChatRoom extends Component {
    state = {
        currentUser: null,
        currentRoom: {users:[]},
        messages: [],
        users: []
    }


    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: "v1:us1:634e15b3-fb2d-47cd-b7aa-3d8749095de8",
            // userId: this.props.currentId,
            tokenProvider: new TokenProvider({
                url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/634e15b3-fb2d-47cd-b7aa-3d8749095de8/token"
            })
        })

        chatManager
            .connect()
            .then(currentUser => {
                this.setState({ currentUser: currentUser })
                return currentUser.subscribeToRoom({
                    roomId: "22825480",
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message],
                            })
                        },
                    }
                })
            })
            .then(currentRoom => {
                this.setState({
                    currentRoom,
                    users: currentRoom.userIds
                })
            })
            .catch(error => console.log(error))
    }

    createUser(username) {
        chatkit.createUser({
            id: username,
            name: username,
        })
            .then((currentUser) => {
                this.setState({
                    currentUsername: username,
                    currentId: username,
                    currentView: 'chatApp'
                })
            }).catch((err) => {
                if (err.status === 400) {
                    this.setState({
                        currentUsername: username,
                        currentId: username,
                        currentView: 'chatApp'
                    })
                } else {
                    console.log(err.status);
                }
            });
    }
}
