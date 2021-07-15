
import React, { useEffect, useState } from 'react'


function ContactTile(props) {
    return (
        <div className="contactsTile">
            {props.name} --- {props.tel}
        </div>
    )
}


export default function ContactsApi() {
    const [contacts, setContacts] = useState([{}]);
    const props = ['name', 'tel'];
    const opts = {multiple: true};
    async function getContacts() {
        try {
            const contacts = await navigator.contacts.select(props, opts);
            return contacts;
        } catch (ex) {
            console.error(ex)
        }
      }

    useEffect(() => {        
        getContacts().then(contacts => {
            const cont = contacts.map(c => ({                   
                name: c['name'].join(" | "),
                tel: c['tel'].join(" | ")
            }))
            window.alert(JSON.stringify(cont))
            setContacts(cont)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    return (
        <div className="contactsPage">            
            {
                contacts.map((contact) => (<ContactTile name={contact.name} tel={contact.tel}/>))
            }           
        </div>
    )
}
