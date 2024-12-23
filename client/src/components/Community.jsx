import React from "react";
import Button from "./Button";

const Community = () => {
	return (
		<div className="flex-center flex-col items-center gap-x-9 mt-5">
			<h3 className="sm:text-4xl text-3xl font-ab max-sm:text-2xl"> Join a Growing Community</h3>
			<p className="min-sm:w-1/2 lg:w-1/2  text-center max-sm:text-left  font-ab p-5 max-sm:text-[16px] text-[#797575]">
				Join thousands of users who trust Note Buddy to keep their
				thoughts organized. Our community of students, professionals,
				and creatives is expanding every day. Be part of a growing group
				that values efficiency, creativity, and simplicity in
				note-taking.
			</p>
            <Button text={"join"}/>
		</div>
	);
};

export default Community;
