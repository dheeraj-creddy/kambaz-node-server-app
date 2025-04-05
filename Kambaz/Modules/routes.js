import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {

    app.post("/api/modules", async (req, res) => {
        const newModule = req.body;
        const status = await modulesDao.createModule(newModule);
        res.send(status);
    });

    app.put("/api/modules/:moduleId", async (req, res) => {
        const {moduleId} = req.params;
        const moduleUpdates = req.body;
        const status = await modulesDao.updateModule(moduleId, moduleUpdates);
        res.send(status);
    });


    app.delete("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const status = await modulesDao.deleteModule(moduleId);
        res.send(status);
    });}