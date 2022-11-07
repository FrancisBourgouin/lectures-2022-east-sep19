const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 1,
  },
];

const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
  3: {
    id: 3,
    time: "2pm",
    interview: null,
  },
};

const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};

// Refresh the app (Get to fetch most recent data) (reliant on backend / BAD!)
// Once we save an appointment, do a get request to fetch the days again (reliant on backend / BAD!)

// bookInterview => spots + 1
// cancelInterview => spots - 1

// Look at the available data locally.
// Fetch the appointments for a given day
// Count how many nulls
// Update the day object with spots being the number of nulls
// Update the state right away, or wait

// updateSpots(state, "Monday")
// => new state object
// => new days object
// => value of spots

const bookInterview = (appId, interview) => {
  const newAppointments = { ...appointments };
  const updatedAppointment = { ...newAppointments[appId] };
  updatedAppointment.interview = interview;

  newAppointments[appId] = updatedAppointment;

  // newAppointments
  // updateSpots(state, "Monday", newAppointments)

  const newState = { ...state, appointments: newAppointments };
  const newDays = updateSpots(newState, "Monday");

  newState.days = newDays;

  setState(newState);
};

const updateSpots = (state, day) => {
  // Access the appointments array for a given day
  // iterate over the appt ids from a given day
  // Count how many nulls from the interview key
  // Spread a new days object
  // Update the days object with spots being the number of nulls
  // return an updated days object
};

// Immutability vs mutations
// spread once per level when editing

// => What you did getAppointmentsForDay
