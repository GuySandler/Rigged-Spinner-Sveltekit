<script>
    import { FormToggle, PeopleList } from '$lib/options/stores';
    let name = '';
    let email = '';

    function handleSubmit() {
        if (email.endsWith('@auhsdschools.org')) {
            // Save name and email variables
            console.log('Name:', name);
            console.log('Email:', email);
            FormToggle.set(false);
            // PeopleList.set([...$PeopleList, { name, email }]);
            PeopleList.set($PeopleList+" "+name+" "+email);
        } else {
            console.log('Invalid email');
        }
    }
</script>

<style>
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-input {
        margin-bottom: 10px;
    }

    .form-button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
    }
</style>

<div class="form-container">
    <div class="form-input">
        <label for="name">Name:</label>
        <input type="text" id="name" bind:value={name} />
    </div>
    <div class="form-input">
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={email} />
    </div>
    <button class="form-button" on:click={handleSubmit}>Submit</button>
</div>
