document.addEventListener('DOMContentLoaded', function () {

    // Select all Elementor forms
    const elementorForms = document.querySelectorAll('.elementor-form');

    elementorForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Prepare form data for submission
            const formData = new FormData(form);
            const object = { subject: "ATW Website Contact" }; // Static subject
            formData.forEach((value, key) => {
                // Clean the key and exclude specific fields
                const cleanKey = key.replace(/form_fields\[(.*?)\]/, '$1');
                if (!['post_id', 'referer_title', 'queried_id'].includes(cleanKey)) {
                    object[cleanKey] = value;
                }
            });
            const json = JSON.stringify(object);

            // Fetch API call
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    console.log("Success:", json.message);
                    window.location.href = "/thank-you"; // Redirect on success
                } else {
                    console.error("Error:", json.message);
                }
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            })
            .then(function () {
                form.reset();
            });
        });
    });
});
