console.log('JS Loaded.')

/*
! Find and replace function
! User must be able to find text and replace it with target
*/

const data = [
    {
        id: 0001,
        name: 'Product 1',
        description: 'Donates an essential face mask to someone experiencing homelessness. Provides funds, employment, resources and opportunity to artisan families throughout Bali, mainly women who craft and create from their own homes so that each can spend more time with their families while earning a real living wage. Blends crepe bamboo rayon with a low environmental impact. This piece is consciously made without using animals or harmful production. Supports a woman owned business, Myrah Peñaloza, whose brand is found on kindness and empowerment for both women and families. Read more about the brand below.'
    },
    {
        id: 0002,
        name: 'Product 2',
        description: 'Donates an essential face mask to someone experiencing homelessness. Provides funds, employment, resources and opportunity to artisan families throughout Bali, mainly women who craft and create from their own homes so that each can spend more time with their families while earning a real living wage. Blends crepe bamboo rayon with a low environmental impact. This piece is consciously made without using animals or harmful production. Supports a woman owned business, Myrah Peñaloza, whose brand is found on kindness and empowerment for both women and families. Read more about the brand below.'
    },
    {
        id: 0003,
        name: 'Product 3',
        description: 'Donates an essential face mask to someone experiencing homelessness. Provides funds, employment, resources and opportunity to artisan families throughout Bali, mainly women who craft and create from their own homes so that each can spend more time with their families while earning a real living wage. Blends crepe bamboo rayon with a low environmental impact. This piece is consciously made without using animals or harmful production. Supports a woman owned business, Myrah Peñaloza, whose brand is found on kindness and empowerment for both women and families. Read more about the brand below.'
    },
    {
        id: 0004,
        name: 'Product 4',
        description: 'Donates an essential face mask to someone experiencing homelessness. Provides funds, employment, resources and opportunity to artisan families throughout Bali, mainly women who craft and create from their own homes so that each can spend more time with their families while earning a real living wage. Blends crepe bamboo rayon with a low environmental impact. This piece is consciously made without using animals or harmful production. Supports a woman owned business, Myrah Peñaloza, whose brand is found on kindness and empowerment for both women and families. Read more about the brand below.'
    },
    {
        id: 0005,
        name: 'Product 5',
        description: 'Donates an essential face mask to someone experiencing homelessness. Provides funds, employment, resources and opportunity to artisan families throughout Bali, mainly women who craft and create from their own homes so that each can spend more time with their families while earning a real living wage. Blends crepe bamboo rayon with a low environmental impact. This piece is consciously made without using animals or harmful production. Supports a woman owned business, Myrah Peñaloza, whose brand is found on kindness and empowerment for both women and families. Read more about the brand below.'
    },
]

const DOM = {
    products: document.getElementById('products'),
    applyBtn: document.getElementById('apply-btn'),
    inputs: document.querySelectorAll('.inputs')
}

const state = {
    find: '',
    replace: ''
}

const loadProducts = data => {
    const ul = document.createElement('ul')

    data.forEach(product => {
        const li = document.createElement('li')
        li.innerHTML = `
            <h4>${product.name}</h4>
            <p>${product.description}</p>
        `

        return ul.appendChild(li)
    })

    DOM.products.appendChild(ul)
}

const getInputValues = (inputs, state) => {
    inputs.forEach(input => {
        input.name === 'find' ? state.find = input.value : state.replace = input.value
    })
    console.log(state)
}

const clearInputs = inputs => {
    inputs.forEach(input => input.value = '')
}

const findAndReplace = (data, state) => {
    getInputValues(DOM.inputs, state)
    clearInputs(DOM.inputs)

    const updatedData = data.map(product => {
        const updatedProduct = {...product}

        updatedProduct.description = product.description.replace(state.find, state.replace)

        return updatedProduct
    })
    DOM.products.innerHTML = ''

    console.log(updatedData)
    loadProducts(updatedData)
}

window.addEventListener('load', () => loadProducts(data)) 
DOM.applyBtn.addEventListener('click', () => findAndReplace(data, state))
