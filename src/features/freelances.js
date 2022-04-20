const initialState = {
  status: 'void',
  data: null,
  error: null,
};

const FETCHING = 'freelances/fething';
const RESOLVED = 'freelances/resolved';
const REJECTED = 'freelances/rejected';

//actions creators
const freelancesFetching = () => ({ type: FETCHING });
const freelancesResolved = (data) => ({ type: RESOLVED, payload: data });
const freelancesRejected = (error) => ({ type: REJECTED, payload: error });

export default function freelancesReducer(state = initialState, action) {
