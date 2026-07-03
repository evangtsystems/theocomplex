"use client";

export default function AdminPage() {
  async function upload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    console.log(result);
    alert(JSON.stringify(result, null, 2));
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Upload</h1>

      <form onSubmit={upload}>
        <input name="password" placeholder="Password" />

        <br />
        <br />

        <select name="slot">
          <option value="lifestyle-1">Lifestyle 1</option>
          <option value="lifestyle-2">Lifestyle 2</option>
          <option value="lifestyle-3">Lifestyle 3</option>
          <option value="lifestyle-4">Lifestyle 4</option>
        </select>

        <br />
        <br />

        <input type="file" name="file" accept="image/*" />

        <br />
        <br />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}