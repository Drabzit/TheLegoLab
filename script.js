// Brick Database (small example with pictures and details)
const legoPartsDatabase = {
    "1x8 Plate": {
        partId: "3460",
        name: "Plate 1 x 8",
        color: "Black",
        image: "https://img.bricklink.com/ItemImage/PN/11/3460.png"
    },
    "2x2 Brick": {
        partId: "3003",
        name: "Brick 2 x 2",
        color: "White",
        image: "https://img.bricklink.com/ItemImage/PN/1/3003.png"
    },
    "1x1 Plate": {
        partId: "3024",
        name: "Plate 1 x 1",
        color: "Black",
        image: "https://img.bricklink.com/ItemImage/PN/11/3024.png"
    },
    "1x1 Tile": {
        partId: "3070b",
        name: "Tile 1 x 1",
        color: "White",
        image: "https://img.bricklink.com/ItemImage/PN/1/3070b.png"
    },
    "1x2 Plate": {
        partId: "3023",
        name: "Plate 1 x 2",
        color: "Black",
        image: "https://img.bricklink.com/ItemImage/PN/11/3023.png"
    },
    "1x1 Round Plate": {
        partId: "4073",
        name: "Plate Round 1 x 1",
        color: "Black",
        image: "https://img.bricklink.com/ItemImage/PN/11/4073.png"
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const processButton = document.getElementById('processButton');

    processButton.addEventListener('click', () => {
        const textInput = document.getElementById('textInput').value.trim().toLowerCase();
        const outputSection = document.getElementById('output-section');
        const brickList = document.getElementById('brickList');
        const instructionGuide = document.getElementById('instructionGuide');

        brickList.innerHTML = '';
        instructionGuide.innerHTML = '';

        if (textInput.includes('desk name plaque') && textInput.includes('chris')) {
            let brickTableHTML = `
                <h3>Lego Brick List</h3>
                <table>
                    <tr><th>Image</th><th>Part</th><th>Color</th><th>Quantity</th><th>Purpose</th></tr>
            `;

            const bricksNeeded = [
                { part: "1x8 Plate", quantity: 5, purpose: "Base frame" },
                { part: "2x2 Brick", quantity: 10, purpose: "Background fill" },
                { part: "1x1 Plate", quantity: 20, purpose: "Letter outlining" },
                { part: "1x1 Tile", quantity: 15, purpose: "Smooth finishing" },
                { part: "1x2 Plate", quantity: 15, purpose: "Letter detailing" },
                { part: "1x1 Round Plate", quantity: 5, purpose: "Decorative corners" }
            ];

            bricksNeeded.forEach(brick => {
                const data = legoPartsDatabase[brick.part];
                brickTableHTML += `
                    <tr>
                        <td><img src="${data.image}" alt="${data.name}" width="50"></td>
                        <td>${data.name}</td>
                        <td>${data.color}</td>
                        <td>${brick.quantity}</td>
                        <td>${brick.purpose}</td>
                    </tr>
                `;
            });

            brickTableHTML += `</table>`;
            brickList.innerHTML = brickTableHTML;

            instructionGuide.innerHTML = `
                <h3>Instruction Guide</h3>
                <ol>
                    <li><strong>Base Frame:</strong> Place five 1x8 Black Plates horizontally.</li>
                    <li><strong>Background:</strong> Fill with 2x2 White Bricks.</li>
                    <li><strong>Letters:</strong> Build 'CHRIS' using 1x1 and 1x2 Black Plates.</li>
                    <li><strong>Finishing:</strong> Smooth gaps with 1x1 White Tiles.</li>
                    <li><strong>Decorative:</strong> Place 1x1 Round Plates at corners.</li>
                </ol>
            `;
            outputSection.style.display = 'block';
        } else {
            brickList.innerHTML = `<p>No matching design found for your input. Try a different idea.</p>`;
            instructionGuide.innerHTML = '';
            outputSection.style.display = 'block';
        }
    });
});
