export const parseEnv = () => {
    let env = Object.entries(process.env);
    env = env.filter(([key, value]) => key.indexOf('RSS_') === 0);
    console.log(env.map(([key, value]) => `${key}=${value}`).join('; ')); 
};