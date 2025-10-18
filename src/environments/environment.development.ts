export interface IEnvironment {
  name: string;
  api_key : string
  giphy_url : string
}

export const environment : IEnvironment = {
    name: "Gifs",
    api_key: "gIPOOrpiWaUszEkkPHIdyLmhI0KRBaft",
    giphy_url: "https://api.giphy.com/v1"
};
