import { Formik, Form, Field } from "formik"


export default function SearchMovies ({onSubmit}){

    const submitHandle = (values, actions)=>{
        const searchData = values.movieName
        onSubmit(searchData)
        actions.resetForm()

    }

    return (
        <>
        <Formik initialValues={{movieName:" "}} onSubmit={submitHandle}>
            <Form>
                <Field name="movieName" id="movieId" ></Field>
                <button type="submit">Search</button>
            </Form>
        </Formik>
        </>
    )
}