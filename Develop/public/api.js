const API = {
  async getLastWorkout() {
    const res = await fetch("/api/workout");
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workout/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout() {
    const res = await fetch("/api/workout", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutInRange() {
    const res = await fetch(`/api/workout/range`);
    const json = await res.json();
    
    return json;
  },
};
