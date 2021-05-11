import React from 'react'
import { useGlobalContext } from '../../store/Context'
import  { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { spacing } from 'material-ui/styles'

export default function ImageResults() {

    const { images, open, dispatch, currentImg } = useGlobalContext()



    const handleOpen = (img) => {

        return dispatch({ type: 'HANDLE_OPEN', payload: img })
    }

    const handleClose = () => {
        dispatch({ type: 'HANDLE_CLOSE' })
    }
        const actions = [
            <FlatButton label="Close" primary={true} onClick={handleClose} />
        ];

        if (images?.length > 0) {

            return ( <>
                    <GridList cols={3}>
                        {images.map(img => (
                            <GridTile
                                title={img.tags}
                                key={img.id}
                                subtitle={
                                    <span>
                                        by <strong>{img.user}</strong>
                                    </span>
                                }
                                actionIcon={
                                    <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                                        <ZoomIn color="white" />
                                    </IconButton>
                                }
                            >
                                <img src={img.largeImageURL} alt="" />
                            </GridTile>
                        ))}
                    </GridList>
                    <Dialog
                        actions={actions}
                        modal={false}
                        open={open}
                        onRequestClose={handleClose}
                    >
                        <img src={currentImg} alt="" style={{ width: '100%' }} />
                    </Dialog>
                </>
            )
        } else {
            return (
                <div>

                </div>
            )
        }


    }






