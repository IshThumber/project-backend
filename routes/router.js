const router = require("express").Router();
const prisma = require("../prisma/prismaClient");
// Get all data
router.get('/alldata', async (req, res) => {
  try {
    const data = await prisma.tbl_data.findMany();
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Create new data
router.post('/newdata', async (req, res) => {
  const newData = req.body;
  try {
    const data = await prisma.tbl_data.create({ data: newData });
    return res.json(data);
  } catch (error) {
    console.error(error.stack);
    return res.status(400).json({ message: error.message });
  }
});

// Delete data by id
router.post('/delete/data/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.tbl_data.delete({
      where: { id: id }
    });
    return res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({ message: error.message });
  }
});

// Update data by id
router.put("/update/data/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const newData = req.body;
    const updatedData = await prisma.tbl_data.update({
      where: { id: id },
      data: newData
    });
    return res.status(200).json(updatedData);
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({ message: error.message });
  }
});

// Send email by id (you need to implement this using Prisma)
router.post("/trunc", async (req, res) => {
  try {
    await prisma.$executeRaw`TRUNCATE TABLE "tbl_data" RESTART IDENTITY;`;
    console.log(`Table "tbl_data" truncated successfully.`);
    res.status(200).send('tbl_data table truncated successfully.');
  } catch (error) {
    console.error(`Error truncating table "tbl_data":`, error);
    res.status(500).send('Error truncating tbl_data table.');
  } finally {
    await prisma.$disconnect();
  }
});


module.exports = router;
