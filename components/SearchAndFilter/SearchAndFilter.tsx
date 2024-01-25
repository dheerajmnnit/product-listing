import React from "react";

import Filters from "./Filters";
import Search from "./Search";

const SearchAndFilter = () => {

	return (
		<section className="max-w-screen bg-white rounded-2xl md:py-8 md:px-10 max-sm:py-5 max-sm:px-8 flex flex-col md:flex-row gap-4 overflow-hidden">
			<div className="md:flex-1 flex items-start">
				<Search />
			</div>
			<div className="md:flex-1 flex items-start">
				<Filters />
			</div>
		</section>
	);
};

export default SearchAndFilter;
