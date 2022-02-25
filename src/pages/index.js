import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { wrapper } from "../app/store";
import { increment, decrement } from "../features/counterSlice";
import { fetchUserId } from "../features/userSlice";

export default function IndexPage(props) {
	const { count } = useSelector((state) => state.counter);
	const { data } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	return (
		<section>
			<h1>Counter</h1>
			<div>
				<p>Count:{count}</p>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>
			<div>
				{data &&
					data.map((item) => (
						<div key={item.id}>
							<p>{item.name}</p>
							<p>{item.email}</p>
						</div>
					))}
			</div>
		</section>
	);
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
	await store.dispatch(fetchUserId());
	return {
		props: {},
	};
});
