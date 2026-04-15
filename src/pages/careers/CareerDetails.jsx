import { useParams, useLoaderData } from "react-router-dom"

export function CareerDetails() {
    const {id} = useParams();
    const careers = useLoaderData();

    return (
        <div>
            <h1>Career Details</h1>
            <p>{careers.title}</p>
            <p>{careers.location}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nobis, fugit, cupiditate, voluptates necessitatibus itaque ea ratione explicabo maiores officiis voluptatem quo? Necessitatibus ex, porro similique quaerat nesciunt perferendis illo!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nobis, fugit, cupiditate, voluptates necessitatibus itaque ea ratione explicabo maiores officiis voluptatem quo? Necessitatibus ex, porro similique quaerat nesciunt perferendis illo!</p>
        </div>
    )
}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params
    const career = await fetch("http://localhost:4000/careers/" + id);
    if (!career.ok) {
        throw Error('Could not fetch the careers')
    }
    return career.json();
}