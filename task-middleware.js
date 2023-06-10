module.exports = (req, res, next) => {
    if (!req.path.includes('/tasks')) {
        next();
        return;
    }

    // Remover propriedades indesejadas do objeto recebido
    if (req.method == 'POST' || req.method == 'PUT') {
        if (req.body.column) {
            delete req.body.column;
        }
        
        if (req.body.category) {
            delete req.body.category;
        }
    }

    next();
}