export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;

    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://main-vue-thales-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );
    console.log(response);

    // const responseData = await response.json();

    // if (!response.ok) {
    //   // error
    // }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
};
