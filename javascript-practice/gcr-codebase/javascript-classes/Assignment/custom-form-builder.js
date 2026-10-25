// Custom Form Builder
class FormBuilder {
  constructor(fields) {
    this.fields = fields;
    this.form = document.createElement("form");
  }

  build() {
    this.form.innerHTML = "<h2>Dynamic Form</h2>";

    this.fields.forEach((field, index) => {
      const wrapper = document.createElement("div");
      const inputId = `field-${index}`;
      wrapper.innerHTML = `
        <label for="${inputId}">${field.label}</label>
        <input id="${inputId}" name="${field.label}" type="${field.type}">
      `;
      this.form.appendChild(wrapper);
    });

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Submit";
    this.form.appendChild(button);

    return this.form;
  }

  getFormData() {
    return Object.fromEntries(new FormData(this.form).entries());
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "number", label: "Age" }
];

const builder = new FormBuilder(fields);
document.body.appendChild(builder.build());

builder.form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(builder.getFormData());
  alert(JSON.stringify(builder.getFormData(), null, 2));
});
