const getDog = function(id) {
  return fetch(`/api/dog/${id}`)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    });
};

export {
  getDog,
};
