// test-script.js

// Brick Database
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

        // Reset previous output
        brickList.innerHTML = '';
        instructionGuide.innerHTML = '';

        if (textInput.includes('chris')) {
            // Build the Brick List
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

            // Instruction Guide
            instructionGuide.innerHTML = `
                <h3>Instruction Guide</h3>
                <ol>
                    <li><strong>Base Frame:</strong> Arrange five 1x8 Black Plates horizontally (20 studs wide).</li>
                    <li><strong>Background:</strong> Use 2x2 White Bricks to fill the base area (approx. 10 studs tall).</li>
                    <li><strong>Letters:</strong> Spell "CHRIS" using 1x1 and 1x2 Black Plates.</li>
                    <li><strong>Finishing Touch:</strong> Add 1x1 White Tiles around for smooth finish and use Round Plates for corners.</li>
                </ol>
                <h3>Visual Mockup (Concept)</h3>
                <div style="background: lightgray; padding: 10px; font-family: monospace;">
                    <pre>
+--------------------+
|   C  H  R  I  S    |
|                    |
+--------------------+
                    </pre>
                </div>
                <p><em>Note: Real layout would align letters using grid constraints.</em></p>
            `;

            outputSection.style.display = 'block';
        } else {
            brickList.innerHTML = `<p>No matching design found for your input. Please try another idea.</p>`;
            instructionGuide.innerHTML = '';
            outputSection.style.display = 'block';
        }
    });
});