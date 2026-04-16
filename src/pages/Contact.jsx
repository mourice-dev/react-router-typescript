import { Form, redirect } from "react-router-dom";

export function Contact() {


    return (<>
        <h2>Contact Page</h2>
        <Form method="post">
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send</button>
        </Form>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque a, at eveniet vel dolorem quia enim unde recusandae ratione cupiditate omnis adipisci? Molestias harum consequatur necessitatibus natus dolore, nam iusto.</p>

    </>)

}

export const contactAction = async ({ request }) => {
 const data = await request.formData();

 const submittion  = { 
    email: data.get('email'),
    message: data.get('message')
 }
 if(submittion.message.length < 10){
    return {error: 'Message must be at least 10 characters long'}
 }
 return redirect('/')
}