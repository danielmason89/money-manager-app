import { useLoaderData, useParams } from "react-router-dom";
import styles from "./plansDetail.module.css";

export default function PlansDetail() {
  const { id } = useParams();
  const plan = useLoaderData();
  return (
    <div className={styles.careerDetails}>
      <h2>Plans Details for {plan.title} Account</h2>
      <p>Minimum Balance: {plan.minimum}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          explicabo eos odit soluta est odio doloremque ullam magni rem pariatur
          eaque perspiciatis ab voluptatum dolorem, reiciendis excepturi labore
          asperiores nisi! Illum, aliquid. Vitae delectus sapiente veniam facere
          fugit autem, fuga vero officiis, aliquid impedit, aliquam enim
          laboriosam consequatur nemo dolorum rem quaerat earum quam molestias
          expedita ratione numquam reiciendis. Facilis!
        </p>
      </div>
    </div>
  );
}

export const planDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch("http://localhost:4000/plans/" + id);
  if (!response.ok) {
    throw Error("Could not get those plan details");
  }
  return response.json();
};
