const ConfirmBox = ({title, show, onResult}: {title: string, show: boolean, onResult: (r : boolean) => void}) => {
    return <div style={{ display: show ? 'block' : 'none' }} className="modal fade show" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                </div>
                <div className="modal-footer">
                    <button onClick={() => onResult(true)} type="button" className="btn btn-primary">Oui</button>
                    <button onClick={() => onResult(false)} type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                </div>
            </div>
        </div>
    </div>
}

export default ConfirmBox