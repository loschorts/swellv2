export const fetchSpotForecast = id => $.get(`api/spots/${id}/forecast`);

export const fetchSpotOverview = id => $.get(`api/spots/${id}/overview`);

export const fetchSpotWeather = id => $.get(`api/spots/${id}/weather`);

export const fetchCountyForecast = county => $.get(`api/counties/${county}/forecast`);

export const login = user => $.post("api/session", {user});

export const signup = user => $.post("api/users", {user});

export const guest = () => $.post("api/users/guest");

export const logout = () => $.ajax({ url: "api/session", type: "DELETE" });

export const searchSpotName = name => $.get("api/spots/search", {name});

export const randomImage = () => $.get('api/images/random');