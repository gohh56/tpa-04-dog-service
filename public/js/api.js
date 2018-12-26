const getDog = function(id) {
  return fetch(`/api/dog/${id}`)
    .then((res) => {
      if (!res.ok) throw Error(res.ok);
      return res;
    })
    .then(res => res.json());
};

export {
  getDog,
};
