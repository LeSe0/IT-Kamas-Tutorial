const NEW_MESSAGE_ADD = 'NEWMESSAGEADD'
const NEW_MESSAGE_CHANGE = 'NEWMESSAGECHANGE'

let initialState = {
    persons : [
        {
            id : 0,
            name : 'Levon',
        },
        {
            id : 1,
            name : 'Aram'
        },
        {
            id : 2,
            name : 'Arman'
        },
        {
            id : 3,
            name : 'Naruto'
        },
        {
            id : 4,
            name : "Itachi"
        },
        {
            id : 5,
            name : 'Hermione'
        }
    ],
        // {
        //     personId : 0,
        //     messages : [
        //         {
        //             message : 'Hi',
        //             img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
        //             time : '02:35 PM'
        //         },
        //         {
        //             message : 'How are you?',
        //             img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
        //             time : '06:56 PM'
        //         },
        //         {
        //             message : 'What is your name?',
        //             img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
        //             time : '08:15 PM'
        //         },
        //         {
        //             message : 'Bye Bye',
        //             img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
        //             time : '10:09 PM'
        //         }
        //     ]
        // },
        // personId : 5,
    messages : [
        {
            id : 1,
            message : 'Yes , its my bad',
            img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
            time : '01:35 PM'
        },
        {
            id : 2,
            message : 'Leviosa not leviosaaa!',
            img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
            time : '02:00 PM'
        },
        {
            id : 3,
            message : 'Dont eat much Ron',
            img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
            time : '02:01 PM'
        },
        {
            id : 4,
            message : 'Hi Harry!',
            img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
            time : '04:00 PM'
        }
    ],
    newMessageText : ''
}

const dialogReducer = (state = initialState , action) =>{ 
    switch (action.type) {
        case NEW_MESSAGE_ADD:
                let messageBody = state.newMessageText;
                let newMessage = {
                    id : state.messages[state.messages.length - 1].id + 1,
                    img : 'https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png',
                    message : messageBody,
                    time : new Date(Date.now()).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
                }
                return {
                    ...state,
                    messages : [...state.messages , newMessage],
                    newMessageText : ''
                }
        case NEW_MESSAGE_CHANGE:
            return {
                ...state,
                newMessageText : action.newText
            };
        default : 
            return state;
    }
}

export let messageActionCreator = () =>({type : NEW_MESSAGE_ADD})

export let messageTextActionCreator = (text) =>({type : NEW_MESSAGE_CHANGE , newText : text})

export default dialogReducer