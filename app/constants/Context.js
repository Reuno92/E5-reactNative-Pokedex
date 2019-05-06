import React from "react";

export const getPokemonId = (id) => {
	if (id > 1 && id <= 9) {
		return "00" + id
	} else if (id >= 10 && id <= 99) {
		return "0" + id
	} else if (id >= 100 && id <= 999) {
		return id
	} else {
		return 'Unknown'
	}
};

export const NavigationContext = React.createContext({
	goBack() {},
	navigate() {}
});
